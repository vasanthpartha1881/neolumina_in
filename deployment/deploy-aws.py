"""Publish a root-path static export to the owner's Neolumina AWS hosting.

Requires boto3 and the Personal-account profile. Does not modify domain DNS,
activate custom domain aliases, or remove old S3 objects. Build first with
NEXT_PUBLIC_BASE_PATH empty. Domain activation follows certificate validation.
"""
import hashlib
import json
import mimetypes
from pathlib import Path

import boto3

ACCOUNT = '271565897858'
BUCKET = 'neolumina-web-271565897858-us-east-1'
FUNCTION = 'neolumina-static-routing'
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'out'


def main():
    session = boto3.Session(profile_name='Personal-account', region_name='us-east-1')
    if session.client('sts').get_caller_identity()['Account'] != ACCOUNT:
        raise RuntimeError('Refusing deployment outside the owner personal AWS account')
    if not (OUT / 'index.html').is_file():
        raise RuntimeError('Run the production static build first')
    if '/neolumina_in/_next/' in (OUT / 'index.html').read_text(encoding='utf-8'):
        raise RuntimeError('Build uses GitHub Pages base path; rebuild with empty base path')
    s3 = session.client('s3')
    cf = session.client('cloudfront')
    buckets = {item['Name'] for item in s3.list_buckets()['Buckets']}
    if BUCKET not in buckets:
        s3.create_bucket(Bucket=BUCKET)
        s3.put_bucket_tagging(Bucket=BUCKET, Tagging={'TagSet': [{'Key': 'Project', 'Value': 'Neolumina website'}]})
    s3.put_public_access_block(Bucket=BUCKET, PublicAccessBlockConfiguration={
        'BlockPublicAcls': True, 'IgnorePublicAcls': True,
        'BlockPublicPolicy': True, 'RestrictPublicBuckets': True})
    s3.put_bucket_ownership_controls(Bucket=BUCKET, OwnershipControls={
        'Rules': [{'ObjectOwnership': 'BucketOwnerEnforced'}]})
    s3.put_bucket_versioning(Bucket=BUCKET, VersioningConfiguration={'Status': 'Enabled'})
    s3.put_bucket_encryption(Bucket=BUCKET, ServerSideEncryptionConfiguration={
        'Rules': [{'ApplyServerSideEncryptionByDefault': {'SSEAlgorithm': 'AES256'}}]})

    code = (ROOT / 'deployment/cloudfront-routing.js').read_bytes()
    config = {'Comment': 'Neolumina Next static export directory routing', 'Runtime': 'cloudfront-js-2.0'}
    try:
        current = cf.describe_function(Name=FUNCTION, Stage='DEVELOPMENT')
        fn = cf.update_function(Name=FUNCTION, IfMatch=current['ETag'], FunctionConfig=config, FunctionCode=code)
    except cf.exceptions.NoSuchFunctionExists:
        fn = cf.create_function(Name=FUNCTION, FunctionConfig=config, FunctionCode=code)
    published = cf.publish_function(Name=FUNCTION, IfMatch=fn['ETag'])
    function_arn = published['FunctionSummary']['FunctionMetadata']['FunctionARN']

    controls = cf.list_origin_access_controls().get('OriginAccessControlList', {}).get('Items', [])
    oac = next((x['Id'] for x in controls if x['Name'] == 'neolumina-private-s3'), None)
    if not oac:
        oac = cf.create_origin_access_control(OriginAccessControlConfig={
            'Name': 'neolumina-private-s3', 'Description': 'Neolumina website private S3 access',
            'SigningProtocol': 'sigv4', 'SigningBehavior': 'always',
            'OriginAccessControlOriginType': 's3'})['OriginAccessControl']['Id']
    distributions = cf.list_distributions().get('DistributionList', {}).get('Items', [])
    distribution = next((d for d in distributions if d['Comment'] == 'Neolumina public website'), None)
    if not distribution:
        distribution = cf.create_distribution(DistributionConfig={
            'CallerReference': 'neolumina-website-20260918',
            'Aliases': {'Quantity': 0}, 'DefaultRootObject': 'index.html',
            'Origins': {'Quantity': 1, 'Items': [{
                'Id': 'neolumina-s3', 'DomainName': BUCKET + '.s3.us-east-1.amazonaws.com',
                'OriginAccessControlId': oac, 'S3OriginConfig': {'OriginAccessIdentity': ''}}]},
            'DefaultCacheBehavior': {
                'TargetOriginId': 'neolumina-s3', 'ViewerProtocolPolicy': 'redirect-to-https',
                'AllowedMethods': {'Quantity': 2, 'Items': ['GET', 'HEAD'],
                                   'CachedMethods': {'Quantity': 2, 'Items': ['GET', 'HEAD']}},
                'Compress': True,
                'CachePolicyId': '658327ea-f89d-4fab-a63d-7e88639e58f6',
                'ResponseHeadersPolicyId': '67f7725c-6f97-4210-82d7-5512b31e9d03',
                'FunctionAssociations': {'Quantity': 1, 'Items': [{
                    'FunctionARN': function_arn, 'EventType': 'viewer-request'}]},
                'TrustedSigners': {'Enabled': False, 'Quantity': 0},
                'TrustedKeyGroups': {'Enabled': False, 'Quantity': 0}},
            'Comment': 'Neolumina public website', 'Enabled': True,
            'PriceClass': 'PriceClass_100', 'HttpVersion': 'http2and3', 'IsIPV6Enabled': True,
            'ViewerCertificate': {'CloudFrontDefaultCertificate': True},
            'CustomErrorResponses': {'Quantity': 2, 'Items': [
                {'ErrorCode': code, 'ResponsePagePath': '/404.html', 'ResponseCode': '404',
                 'ErrorCachingMinTTL': 10} for code in [403, 404]]},
            'Restrictions': {'GeoRestriction': {'RestrictionType': 'none', 'Quantity': 0}}
        })['Distribution']
    distribution_id = distribution['Id']
    arn = 'arn:aws:cloudfront::' + ACCOUNT + ':distribution/' + distribution_id
    s3.put_bucket_policy(Bucket=BUCKET, Policy=json.dumps({
        'Version': '2012-10-17', 'Statement': [{
            'Sid': 'CloudFrontReadOnly', 'Effect': 'Allow',
            'Principal': {'Service': 'cloudfront.amazonaws.com'}, 'Action': 's3:GetObject',
            'Resource': 'arn:aws:s3:::' + BUCKET + '/*',
            'Condition': {'StringEquals': {'AWS:SourceArn': arn}}}]}))
    count = 0
    types = {'.js': 'application/javascript', '.css': 'text/css', '.html': 'text/html',
             '.txt': 'text/plain', '.svg': 'image/svg+xml', '.json': 'application/json'}
    for file in sorted(OUT.rglob('*')):
        if not file.is_file() or file.name in {'CNAME', '.DS_Store'}:
            continue
        key = file.relative_to(OUT).as_posix()
        data = file.read_bytes()
        cache = ('public,max-age=31536000,immutable' if key.startswith('_next/static/') else
                 'public,max-age=60,must-revalidate' if file.suffix in {'.html', '.txt'} else
                 'public,max-age=3600')
        s3.put_object(Bucket=BUCKET, Key=key, Body=data,
                      ContentType=types.get(file.suffix, mimetypes.guess_type(key)[0] or 'application/octet-stream'),
                      CacheControl=cache, Metadata={'sha256': hashlib.sha256(data).hexdigest()})
        count += 1
    cf.create_invalidation(DistributionId=distribution_id, InvalidationBatch={
        'Paths': {'Quantity': 1, 'Items': ['/*']},
        'CallerReference': __import__('uuid').uuid4().hex})
    print(json.dumps({'bucket': BUCKET, 'distribution': distribution_id,
                      'preview': 'https://' + distribution['DomainName'], 'uploaded_files': count,
                      'function': function_arn, 'origin_access_control': oac}))


if __name__ == '__main__':
    main()

# Neolumina AWS hosting

Owner authorized migration on September 18, 2026. This resumes website migration only;
it does not resume paused Chiron build, research or scheduled reporting.

## Hosting

- Personal AWS account: `271565897858`, CLI profile `Personal-account`.
- Region for S3 and ACM: `us-east-1`.
- Private, encrypted, versioned bucket: `neolumina-web-271565897858-us-east-1`.
- CloudFront distribution: `EZPSKGDE323SB`.
- Preview: <https://d2sncadtczi6g4.cloudfront.net>.
- Origin access control: `EXX8U7B18OYUS`; bucket access is restricted to this distribution.
- CloudFront Function `neolumina-static-routing` resolves exported directory routes.
- Existing Chiron hosting is separate and was not changed.

The initial export uses product source `5ee44880a1a4dcf2f865a9799bd8c5f4c90de0ae`.
Production build passed, producing seven content pages plus static error/assets.
65 files (12,781,960 bytes) were uploaded. The unused `/api/contact` server route is
not hosted by this static deployment; the visible contact page uses mail links.

### Verification on September 18, 2026

CloudFront reached `Deployed`. All 65 S3 object checksums match the local export;
unauthenticated direct S3 access returns 403. Five CloudFront Function tests cover
root, slash/no-slash routes, a nested route and an unchanged JavaScript asset path.
Browser verification on the public HTTPS preview passed all seven content pages,
with zero broken images and zero JavaScript page errors. The Chiron home tile points
to `https://chirongov.com/`; mobile navigation opens, navigates and closes correctly
at 390px without horizontal overflow. A nonexistent route returns HTTP 404.

The owner added both ACM validation CNAMEs in Cloudflare. Public DNS checks against
Cloudflare and Google resolvers confirm the expected targets. ACM has issued the certificate, and CloudFront has been configured with both
custom-domain aliases using SNI and `TLSv1.2_2021`. Website address records have not
been switched. CloudFront reached `Deployed`. Pre-cutover requests for each hostname were routed
directly to the distribution with curl `--connect-to`; both returned HTTP 200 with
TLS certificate verification success. The public DNS cutover remains pending.
Preview verification is not domain-cutover completion.

## DNS validation: safe to add before switching the website

In the **Cloudflare neolumina.in zone**, add the following CNAMEs, both **DNS only**
(gray cloud), TTL Auto. Keep these records for automatic certificate renewal.

| Name | Target |
| --- | --- |
| `_4cf2482fc38516044b58481f90c8f2d7` | `_bbbadb1d0be72a707ae7df1c9bcd1b04.wzccmgtwzk.acm-validations.aws` |
| `_287836f32bdb5001ed09899220c83d51.www` | `_779fa95d5c8705a720850c734fd20848.wzccmgtwzk.acm-validations.aws` |

Certificate ARN:
`arn:aws:acm:us-east-1:271565897858:certificate/e01e3b5b-e03c-45af-9bf0-9d3725c520ab`.

## Cutover sequence — pending DNS access/owner action

1. Export all existing Cloudflare DNS records and inspect any Workers/redirect rules
   affecting root or www. The screenshot only covers website address records.
2. Add the validation CNAMEs above. Wait for ACM status `ISSUED`.
3. Attach that certificate to distribution `EZPSKGDE323SB`, add both aliases
   `neolumina.in` and `www.neolumina.in`, and require SNI with a TLS 1.2 minimum.
   Preserve all other distribution settings; wait until `Deployed`.
4. Once the CloudFront preview is verified, replace **only** the root/www A/AAAA
   website records with CNAME `@` and CNAME `www`, each targeting
   `d2sncadtczi6g4.cloudfront.net`, initially DNS only. Cloudflare flattens the root
   CNAME. Do not change MX, SPF, DKIM, DMARC, other TXT, verification or unrelated
   subdomain records. Do not change GoDaddy nameservers for this route.
5. Verify both domains over HTTPS, routes, static assets, mobile menu, 404s and mail links.

Keep old GitHub Pages hosting during the change. Roll back DNS to the exported
root/www records and their proxy settings if the new site has a material problem.
The old origin shown in the owner's screenshot uses GitHub Pages addresses.

## Subsequent deployment

Prerequisites: Node/npm dependencies installed, Python with boto3, the personal AWS
profile. The script refuses an unexpected account and a known GitHub Pages base path.

```powershell
$env:NEXT_PUBLIC_BASE_PATH = ''
$env:NEXT_TELEMETRY_DISABLED = '1'
npm run build
python deployment/deploy-aws.py
```

The deployer uploads the export, preserves prior object versions, publishes the route
function and invalidates the CloudFront cache. It does not delete old objects or change
DNS/custom-domain bindings. Existing GitHub Pages automation remains available;
pushing Git does **not** automatically deploy to AWS.

AWS charges are usage based; this setup adds no server instance or separate Route 53
zone. It uses S3, CloudFront and a request-routing CloudFront Function. No zero-cost
guarantee or startup-credit eligibility is assumed.

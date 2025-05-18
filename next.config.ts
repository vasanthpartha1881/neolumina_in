/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/neolumina_in',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  assetPrefix: '/neolumina_in/',
}

export default nextConfig

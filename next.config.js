/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  output: 'export',  // Enable static exports for GitHub Pages
  basePath: '/neolumina_in',  // Add base path for GitHub Pages
  assetPrefix: '/neolumina_in/',  // Add asset prefix for GitHub Pages
}

module.exports = nextConfig 
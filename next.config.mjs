/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/site',  // https://github.com/marlenerhtechrecruter/site
  assetPrefix: '/site', // Maah
}

export default nextConfig

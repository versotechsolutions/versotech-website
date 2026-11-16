/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {ignoreDuringBuilds: true,},
  images: {
    // No remote hosts are allowed through the image optimiser. Every image on the site is local
    // (public/ or src/assets). Previously any https host was allowed ('**'), which let anyone use the
    // optimiser as an open image proxy. Add specific hosts here only when needed.
    // NOTE: Amazon product images (future Creators API) must NOT go through the optimiser, because
    // Amazon's Operating Agreement forbids storing/caching them. VpImage renders remote images with
    // `unoptimized`, so no entry is needed for them here.
    remotePatterns: [],
  },
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] },
}
module.exports = nextConfig

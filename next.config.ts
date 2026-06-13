/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {ignoreDuringBuilds: true,},
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] },
}
module.exports = nextConfig

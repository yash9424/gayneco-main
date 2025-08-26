/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/gayneco-main/First-Trimester',
  assetPrefix: '/gayneco-main/First-Trimester',
}

export default nextConfig

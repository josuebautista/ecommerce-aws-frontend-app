/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-ecommerce-tech.s3.amazonaws.com',
      }
    ]
  }
}

module.exports = nextConfig

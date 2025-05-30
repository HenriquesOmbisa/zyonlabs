import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com', 
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

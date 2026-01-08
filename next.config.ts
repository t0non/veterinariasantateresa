import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {},
  allowedDevOrigins: [
    'https://6000-firebase-studio-1767892735188.cluster-j6d3cbsvdbe5uxnhqrfzzeyj7i.cloudworkstations.dev',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

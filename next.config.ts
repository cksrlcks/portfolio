import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'heavybear-portfolio.vercel.app',
          },
        ],
        destination: 'https://heavybear.net',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

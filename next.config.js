/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for admin routes
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

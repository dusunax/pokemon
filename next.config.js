/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60, // 1 hour
  },
  generateBuildId: async () => {
    return `${Date.now()}`;
  },
};

module.exports = nextConfig;

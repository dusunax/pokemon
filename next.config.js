// next.config.js
module.exports = {
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI",
      },
    ],
    // domains: ["raw.githubusercontent.com"],
    // loader: "imgix",
    // path: "https://raw.githubusercontent.com/",
  },
};

module.exports = nextConfig;

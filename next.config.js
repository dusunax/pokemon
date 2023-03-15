/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // loader: "imgix",
    // path: "https://raw.githubusercontent.com/",
    domains: ["raw.githubusercontent.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "raw.githubusercontent.com",
    //     pathname: "/PokeAPI",
    //   },
    // ],
  },
};

module.exports = nextConfig;

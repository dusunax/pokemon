/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
    loader: "imgix",
    path: "https://raw.githubusercontent.com/",
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

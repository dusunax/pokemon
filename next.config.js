/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    loader: "imgix",
    path: "https://raw.githubusercontent.com/",
  },
};

module.exports = nextConfig;

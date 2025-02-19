/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["raw.githubusercontent.com"],
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;

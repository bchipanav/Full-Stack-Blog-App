/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all external images
      },
    ],
    domains: ["your-image-host.com"], // Add your specific domains here
  },
};

module.exports = nextConfig;

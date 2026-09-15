import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/tax-gst-advisory',
        destination: '/services/tax-gst-compliance',
        permanent: true,
      },
      {
        source: '/services/trade-risk-management',
        destination: '/services/risk-management',
        permanent: true,
      },
      {
        source: '/services/warehousing-distribution',
        destination: '/services/warehousing-solutions',
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;

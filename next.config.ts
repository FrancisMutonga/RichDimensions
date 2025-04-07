import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      
    ],
    domains: ['rich-dimensions.firebasestorage.app'], 
   
  },
};

export default nextConfig;

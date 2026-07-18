import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Set to 0 so replacing an image in /public is always reflected immediately.
    // Without this, Next.js caches optimized images for 60 seconds minimum.
    minimumCacheTTL: 0,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles image optimization natively — no need for unoptimized
  // No basePath, assetPrefix, output:export or trailingSlash needed for Vercel
};

export default nextConfig;

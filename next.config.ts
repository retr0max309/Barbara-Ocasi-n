import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Vercel handles image optimization natively — no need for unoptimized
  // No basePath, assetPrefix, output:export or trailingSlash needed for Vercel

  turbopack: {
    // Fija la raíz del workspace para evitar que Turbopack se confunda
    // con el package-lock.json de C:\Users\NITRO\ (fuera del proyecto).
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

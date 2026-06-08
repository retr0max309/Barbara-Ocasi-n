import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Barbara-Ocasi-n",
  assetPrefix: "/Barbara-Ocasi-n/",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/Barbara-Ocasi-n" : "",
  assetPrefix: isProd ? "/Barbara-Ocasi-n/" : "",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

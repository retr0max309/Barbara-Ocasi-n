import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Descomentar si GitHub Pages sirve desde un subpath (e.g. /barbara-ocasion-next)
  // basePath: "/barbara-ocasion-next",
  // assetPrefix: "/barbara-ocasion-next/",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

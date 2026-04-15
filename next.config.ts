import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/anothermee-pitch",
  assetPrefix: "/anothermee-pitch/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

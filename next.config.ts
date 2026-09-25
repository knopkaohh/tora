import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/tora",
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;

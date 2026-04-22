import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

process.env.NEXT_TURBOPACK = "0";

export default nextConfig;
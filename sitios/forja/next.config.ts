import type { NextConfig } from "next";

// Estático: `next build` deja la web entera en out/, que sirve nginx en el CT 108 de cosmos.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ["retro"],
};

export default nextConfig;

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Webflow Cloud runs on Cloudflare Workers via OpenNext; keep image
  // optimization off and let the CDN serve assets directly.
  images: { unoptimized: true },
  transpilePackages: ["@ecru/core", "@ecru/blocks", "@ecru/tokens", "@ecru/utils"]
};

export default withMDX(config);

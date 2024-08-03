import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    experimental: {},
};

const withMDX = createMDX();
export default withMDX(nextConfig);

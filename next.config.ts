/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/",
        permanent: false,
      },
      {
        source: "/sign-in",
        destination: "/",
        permanent: false,
      },
      {
        source: "/sign-up",
        destination: "/",
        permanent: false,
      },
    ];
  },
  // Optionally, add any other Next.js config below
};

export default nextConfig;

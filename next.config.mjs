const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/savant' : '',
  output: 'export', // for static export (required for GitHub Pages)
  trailingSlash: true, // ensure trailing slashes for static export
  images: { unoptimized: true },
  reactStrictMode: true
};

export default nextConfig;
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/savant' : '',
  output: 'export', // for static export (required for GitHub Pages)
  images: { unoptimized: true },
  reactStrictMode: true
};

export default nextConfig;
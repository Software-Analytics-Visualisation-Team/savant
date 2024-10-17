/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: (process.env.NODE_ENV === "development" ? "" : "/savant"),  // <=== comment out before running npm run dev
    output: "export",  // <=== enables static exports
    images: { unoptimized: true },
    reactStrictMode: true
};

export default nextConfig;

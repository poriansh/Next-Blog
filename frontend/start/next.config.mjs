/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**/*",
      },
    ],
  },
  // experimental : {
  //   ppr : "incremental" // داینامیک داینامیک کردن بعضی کامپوننت ها
  // }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img1.wsimg.com" },
      { protocol: "https", hostname: "khjhjqeofenjnwtgorcz.supabase.co" },
    ],
  },
};

export default nextConfig;

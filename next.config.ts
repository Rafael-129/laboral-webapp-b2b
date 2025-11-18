import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/landing-b2b",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

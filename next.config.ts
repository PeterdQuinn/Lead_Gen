import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't get confused by the
  // stray package-lock.json in the home directory.
  turbopack: {
    root: "/Users/peterquinn/Desktop/Insurance",
  },
};

export default nextConfig;

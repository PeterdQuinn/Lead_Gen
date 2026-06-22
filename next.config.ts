import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The project lives in the iCloud-synced Desktop folder. iCloud evicts/relocates
  // Next's build files mid-write, which corrupts the cache and 500s every route.
  // macOS iCloud ignores any path ending in ".nosync", so we keep the build dir
  // inside the project (Turbopack requires distDir to stay under the root) but
  // out of iCloud's reach.
  distDir: ".next.nosync",
  turbopack: {
    root: "/Users/peterquinn/Desktop/Insurance",
  },
  // The funnel now lives at /high-income-strategy. Preserve the old URL with a
  // permanent redirect so any existing links/bookmarks still resolve.
  async redirects() {
    return [
      {
        source: "/high-earner-wealth-assessment",
        destination: "/high-income-strategy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

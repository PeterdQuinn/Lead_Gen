import type { NextConfig } from "next";

// The `.next.nosync` build dir and pinned Turbopack root are LOCAL-ONLY
// workarounds for this project living in an iCloud-synced Desktop folder
// (iCloud evicts Next's build files mid-write and corrupts the cache; macOS
// skips any path ending in ".nosync"). In CI / Vercel there is no iCloud, and
// the platform expects the default ".next" output dir — applying these there
// breaks the build ("routes-manifest.json couldn't be found"). So we only
// enable them when developing locally.
const isCI = !!process.env.VERCEL || !!process.env.CI;

const nextConfig: NextConfig = {
  ...(isCI
    ? {}
    : {
        distDir: ".next.nosync",
        turbopack: { root: process.cwd() },
      }),
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

import type { NextConfig } from "next";

const CALC_SUBDOMAIN = "https://calculators.moneymath.pro";

const CALC_PATHS = [
  "/mortgage", "/loan", "/auto-loan", "/compound", "/savings",
  "/retirement", "/paycheck", "/tax", "/inflation", "/tip",
  "/salary", "/house-affordability", "/401k", "/student-loan",
  "/amortization", "/cost-of-living",
  "/bmi", "/calorie", "/age", "/tdee", "/macro", "/bmr",
  "/percentage", "/date", "/unit-converter", "/gpa",
  "/self-employment-tax", "/1099-vs-w2", "/fire",
  "/rent-vs-buy", "/debt-payoff", "/capital-gains",
];

const STATIC_PATHS = ["/about", "/contact", "/privacy", "/terms", "/disclaimer", "/blog"];

const STATE_VARIANT_PREFIXES = ["/mortgage", "/tax", "/paycheck", "/cost-of-living"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...CALC_PATHS.map((path) => ({
        source: path,
        destination: `${CALC_SUBDOMAIN}${path}`,
        permanent: true,
      })),
      ...STATIC_PATHS.map((path) => ({
        source: path,
        destination: `${CALC_SUBDOMAIN}${path}`,
        permanent: true,
      })),
      ...STATE_VARIANT_PREFIXES.map((prefix) => ({
        source: `${prefix}/:state`,
        destination: `${CALC_SUBDOMAIN}${prefix}/:state`,
        permanent: true,
      })),
      {
        source: "/answers/:slug",
        destination: `${CALC_SUBDOMAIN}/answers/:slug`,
        permanent: true,
      },
      // Legacy: /capital-gains never had state variants. Consolidate strays
      // (e.g. /capital-gains/north-dakota) onto the main page instead of 404.
      {
        source: "/capital-gains/:stray+",
        destination: `${CALC_SUBDOMAIN}/capital-gains`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

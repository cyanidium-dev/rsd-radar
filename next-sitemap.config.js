/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { radarItems } = require("./src/shared/constants/slugs.js");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const radarRoutes = radarItems.map((radar) => ({
      loc: `/${radar.slug}`,
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    }));

    return radarRoutes;
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};

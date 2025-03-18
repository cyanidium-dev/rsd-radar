/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { radarItems } = require("./src/shared/constants/slugs.js");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const locales = ["en", "ua"];
    const result = [];

    locales.forEach((locale) => {
      const alternateRefs = locales.map((altLocale) => ({
        href: `${config.siteUrl}/${altLocale}`,
        hreflang: altLocale,
        hrefIsAbsolute: true,
      }));
      result.push({
        loc: `${config.siteUrl}/${locale}`,
        changefreq: "monthly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs,
      });
    });

    radarItems.forEach((radar) => {
      locales.forEach((locale) => {
        const alternateRefs = locales.map((altLocale) => ({
          href: `${config.siteUrl}/${altLocale}/${radar.slug}`,
          hreflang: altLocale,
          hrefIsAbsolute: true,
        }));
        result.push({
          loc: `${config.siteUrl}/${locale}/${radar.slug}`,
          changefreq: "monthly",
          priority: 0.8,
          lastmod: radar.lastUpdated || new Date().toISOString(),
          alternateRefs,
        });
      });
    });

    return result;
  },
};

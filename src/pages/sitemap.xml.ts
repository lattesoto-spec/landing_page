import type { APIRoute } from "astro";
import { site } from "../config/site";

export const prerender = true;

const publicPaths = [
  "/",
  "/resources",
  "/care-minutes-software",
  "/care-minutes-performance-statement",
  "/24-7-rn-coverage",
  "/qfr-care-minutes-reporting",
  "/care-minutes-audit-preparation",
  "/care-minutes-calculator",
  "/privacy",
  "/terms",
];

export const GET: APIRoute = () => {
  const urls = publicPaths
    .map(
      (path) =>
        `<url><loc>${new URL(path, site.siteUrl).toString()}</loc><lastmod>2026-08-11</lastmod></url>`,
    )
    .join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

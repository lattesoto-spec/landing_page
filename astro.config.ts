import { defineConfig } from "astro/config";
import { env } from "node:process";

const configuredSiteUrl = env.PUBLIC_SITE_URL?.replace(/\/$/, "");
const deploymentUrl =
  configuredSiteUrl ?? (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : "http://localhost:4321");

if (env.VERCEL_ENV === "production" && !configuredSiteUrl) {
  throw new Error("PUBLIC_SITE_URL must be configured before a production deployment.");
}

export default defineConfig({
  site: deploymentUrl,
  output: "static",
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: "assets",
  },
  vite: {
    define: {
      __CAREMIN_DEPLOYMENT_URL__: JSON.stringify(deploymentUrl),
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});

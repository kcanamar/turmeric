import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    // This will inject Vercel's tracking scripts into all pages
    analytics: true
  }),
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["@fontsource/roboto"]
    }
  }
});
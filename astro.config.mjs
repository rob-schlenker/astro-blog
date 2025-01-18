// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://amazing-parfait-9cf537.netlify.app/blog/",
  integrations: [preact()]
});
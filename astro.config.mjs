import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

import tailwindConfig from './tailwind.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), tailwind(tailwindConfig)]
});
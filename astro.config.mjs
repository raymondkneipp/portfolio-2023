import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://raymondkneippbeta.vercel.app/',
  integrations: [robotsTxt(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx(), sitemap()]
});
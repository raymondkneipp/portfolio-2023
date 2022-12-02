import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://raymondkneippbeta.vercel.app/',
  integrations: [robotsTxt(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx(), sitemap(), react()]
});
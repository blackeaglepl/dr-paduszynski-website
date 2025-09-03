// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://osteopatia-paduszynski.pl/',
  trailingSlash: 'ignore', // Fixes mobile vs desktop routing issues
  build: {
    format: 'directory',
  },
  integrations: [mdx(), sitemap(), tailwind()],
});

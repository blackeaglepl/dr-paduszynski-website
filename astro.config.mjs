// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://osteopatia-paduszynski.pl/',
  build: {
    format: 'directory',
    assets: '_astro'
  },
  server: {
    // Headers for development server SSL compatibility
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff'
    }
  },
  vite: {
    build: {
      // Optymalizacje dla SSL
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    server: {
      // SSL-friendly dev server settings
      https: false, // Let Netlify handle SSL
      hmr: {
        protocol: 'ws'
      }
    }
  },
  integrations: [mdx(), sitemap(), tailwind()],
});

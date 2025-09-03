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
  integrations: [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Konfiguracja dla lepszego SEO
      serialize(item) {
        // Priorytet dla stron głównych
        if (item.url === 'https://osteopatia-paduszynski.pl/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Priorytet dla ważnych stron
        if (item.url.includes('/cennik') || item.url.includes('/kontakt')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Blog ma średni priorytet ale częstsze zmiany
        if (item.url.includes('/blog')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        return item;
      }
    }),
    tailwind()
  ],
});

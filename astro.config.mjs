// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    webmanifest({
      name: 'OpenSymbiose - Blog',
      short_name: 'OpenSymbiose',
      description: 'OpenSymbiose - Blog',
      icon: 'public/favicon.svg',
      start_url: '/',
      theme_color: '#ffffff',
      background_color: '#000000',
      display: 'standalone',
    }),
  ],
  site: 'https://opensymbiose.pl',
});

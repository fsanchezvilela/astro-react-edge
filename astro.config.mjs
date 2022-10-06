import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
    logLevel: 'debug',
    cacheDir: './.cache/image'
  })],
  output: 'server',
  adapter: netlify()
});
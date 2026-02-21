import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jharibo.github.io',
  base: '/busparkrangers.github.io',
  integrations: [tailwind()],
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bus-park-rangers.github.io',
  integrations: [tailwind()],
});

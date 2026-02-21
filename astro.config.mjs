import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://busparkrangers.com',
  integrations: [tailwind()],
});

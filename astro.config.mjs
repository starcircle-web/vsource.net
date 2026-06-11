import { defineConfig } from 'astro/config';

// vsource.net is served from GitHub Pages at the apex domain (CNAME).
export default defineConfig({
  site: 'https://vsource.net',
  build: { format: 'directory' },
});

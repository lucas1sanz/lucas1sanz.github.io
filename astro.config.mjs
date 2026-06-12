// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User page (lucas1sanz.github.io) — served from the root, so no `base` is needed.
// If you ever switch to a project page, set `base: '/repo-name'`.
export default defineConfig({
  site: 'https://lucas1sanz.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});

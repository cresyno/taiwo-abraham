import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://taiwo-abraham.vercel.app',
  vite: { plugins: [tailwindcss()] },
});

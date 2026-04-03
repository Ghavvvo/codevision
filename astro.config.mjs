// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://ghavvvo.github.io/', // Reemplaza 'tuusuario' con tu nombre de usuario de GitHub
  // Ensure `base` ends with a trailing slash for correct asset URLs on GitHub Pages
  base: '/',
  build: {
    assets: 'assets'
  },
  vite: {
    ssr: {
      external: ["gsap"]
    }
  }
});
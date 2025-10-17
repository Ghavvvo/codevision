// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://Ghavvvo.github.io', // Reemplaza 'tuusuario' con tu nombre de usuario de GitHub
  base: '/portfolio',
  build: {
    assets: 'assets'
  },
  vite: {
    ssr: {
      external: ["gsap"]
    }
  }
});
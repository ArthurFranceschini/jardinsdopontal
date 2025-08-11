import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  
    resolve: {
      alias: {'@assets': '/src/assets',
      },
    },
  },
  devToolbar: {
    enabled: false
  },
});
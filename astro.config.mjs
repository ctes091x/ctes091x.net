// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ctes091x.net',
  base: '/',
  markdown: {
    shikiConfig: {
      // ライト/ダークの両テーマを出力し、global.css 側で切り替える
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

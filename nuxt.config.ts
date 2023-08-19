// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Post app Nuxt 3',
    },
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  css: ['~/assets/styles/main.css'],
});

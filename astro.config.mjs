import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clawdbot.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});

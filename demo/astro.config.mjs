import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import { GardenPreview } from "astro-garden";
import gardenConfig from './garden.config.mjs';
// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), GardenPreview(gardenConfig.seedUrl)],
});
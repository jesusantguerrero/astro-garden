import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import seedLinks from "astro-garden";
// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), seedLinks()],
});
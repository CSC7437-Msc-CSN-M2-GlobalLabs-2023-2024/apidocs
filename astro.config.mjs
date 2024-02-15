import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://CSC7437-Msc-CSN-M2-GlobalLabs-2023-2024.github.io',
  base: '/apidocs',
});
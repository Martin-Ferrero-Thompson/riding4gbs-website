import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [tailwind(), react()],
  viewTransitions: true,

  vite: {
    plugins: [tailwindcss()]
  }
});
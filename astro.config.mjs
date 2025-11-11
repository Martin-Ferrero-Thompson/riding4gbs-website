import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

// The import for @tailwindcss/vite is no longer needed

export default defineConfig({
  integrations: [
    tailwind(),
    react({ include: ["**/*.jsx"] }),
    solid({ include: ["**/*.tsx"] }),
  ],
  viewTransitions: true,
  // The vite section has been removed
});
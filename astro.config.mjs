import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// The import for @tailwindcss/vite is no longer needed

export default defineConfig({
  integrations: [tailwind(), react()],
  viewTransitions: true,
  // The vite section has been removed
});
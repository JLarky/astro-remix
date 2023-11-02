import { defineConfig } from "astro/config";
import { unstable_vitePlugin as remix } from "@remix-run/dev";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [remix()],
  },
});

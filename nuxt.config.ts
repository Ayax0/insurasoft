import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-09",
  modules: ["@nuxt/eslint"],
  eslint: {
    config: { rootDir: fileURLToPath(new URL("..", import.meta.url)) },
  },
});

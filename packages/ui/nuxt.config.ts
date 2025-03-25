import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  extends: ["../../"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxt/icon",
  ],
  shadcn: {
    prefix: "",
    componentDir: fileURLToPath(
      new URL("./app/components/ui", import.meta.url),
    ),
  },
  tailwindcss: {
    cssPath: fileURLToPath(
      new URL("./app/assets/css/tailwind.css", import.meta.url),
    ),
  },
  colorMode: {
    classSuffix: "",
  },
  alias: {
    "@ui": fileURLToPath(new URL("./app", import.meta.url)),
  },
});

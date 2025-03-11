import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  extends: ["../../"],
  runtimeConfig: {
    database: "",
  },
  alias: {
    "@db": fileURLToPath(new URL("./server/db", import.meta.url)),
  },
});

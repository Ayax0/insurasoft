export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  extends: ["../../", "@insurasoft/db"],
  runtimeConfig: {
    storage: "",
  },
});

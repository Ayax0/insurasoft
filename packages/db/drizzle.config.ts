import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

let processEnv = { NUXT_DATABASE: "" };
config({ processEnv, override: true });

export default defineConfig({
  dialect: "sqlite",
  out: "./server/db/migrations",
  schema: "./server/db/schema/*.db.ts",
  dbCredentials: { url: processEnv.NUXT_DATABASE },
});

import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "../db/schema";

const { database: url } = useRuntimeConfig();
const client = createClient({ url });
const db = drizzle({ client, schema });

export default function () {
  return db;
}

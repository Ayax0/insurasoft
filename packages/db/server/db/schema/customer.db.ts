import { int, sqliteTable } from "drizzle-orm/sqlite-core";

export const customerDb = sqliteTable("customer", {
  id: int().primaryKey({ autoIncrement: true }),
});

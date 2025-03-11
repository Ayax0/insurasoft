import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const fileDb = sqliteTable("file", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text({ length: 256 }),
  path: text({ length: 512 }),
  extname: text({ length: 16 }),
  mimetype: text({ length: 32 }),
  size: int().notNull(),
});

export type File = InferSelectModel<typeof fileDb>;
export type FileInsert = InferInsertModel<typeof fileDb>;
export type SafeFile = Omit<File, "path">;

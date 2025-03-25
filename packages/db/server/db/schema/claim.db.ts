import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { fileDb } from "./file.db";
import { relations } from "drizzle-orm";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { toTypedSchema } from "@vee-validate/zod";
import { customerDb } from "./customer.db";

export const claimDb = sqliteTable("claim", {
  id: int().primaryKey({ autoIncrement: true }),
  description: text().notNull(),
  amount: real(),
  customer: int().references(() => customerDb.id),
  file: int()
    .references(() => fileDb.id)
    .notNull(),
});

export const claimRelations = relations(claimDb, ({ one }) => ({
  customer: one(customerDb, {
    fields: [claimDb.customer],
    references: [customerDb.id],
  }),
  file: one(fileDb, {
    fields: [claimDb.file],
    references: [fileDb.id],
  }),
}));

export const claimInsertSchema = createInsertSchema(claimDb);
export const claimInsertValidate = toTypedSchema(claimInsertSchema);

export const claimUpdateSchema = createUpdateSchema(claimDb);
export const claimUpdateValidate = toTypedSchema(claimUpdateSchema);

import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { fileDb } from "./file.db";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { toTypedSchema } from "@vee-validate/zod";
import { customerDb } from "./customer.db";

export const requestDb = sqliteTable("request", {
  id: int().primaryKey({ autoIncrement: true }),
  description: text().notNull(),
  approved: int({ mode: "boolean" }),
  customer: int().references(() => customerDb.id),
  file: int()
    .references(() => fileDb.id)
    .notNull(),
});

export const requestRelations = relations(requestDb, ({ one }) => ({
  customer: one(customerDb, {
    fields: [requestDb.customer],
    references: [customerDb.id],
  }),
  file: one(fileDb, {
    fields: [requestDb.file],
    references: [fileDb.id],
  }),
}));

export const requestInsertSchema = createInsertSchema(requestDb);
export const requestInsertValidate = toTypedSchema(requestInsertSchema);

export const requestUpdateSchema = createUpdateSchema(requestDb);
export const requestUpdateValidate = toTypedSchema(requestUpdateSchema);

export type Request = InferSelectModel<typeof requestDb>;
export type RequestInsert = InferInsertModel<typeof requestDb>;

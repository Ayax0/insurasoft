import { requestDb, requestInsertSchema } from "@db/schema";

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, requestInsertSchema.parse);
  return useDrizzle().insert(requestDb).values(data).returning();
});

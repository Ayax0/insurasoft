import { claimDb, claimInsertSchema } from "@db/schema";

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, claimInsertSchema.parse);
  return useDrizzle().insert(claimDb).values(data).returning();
});

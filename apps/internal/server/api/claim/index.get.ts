import { eq, isNull } from "@db";
import { claimDb } from "@db/schema";

export default defineEventHandler(() => {
  return useDrizzle().select().from(claimDb).where(isNull(claimDb.amount));
});

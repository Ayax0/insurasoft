import { eq, isNull } from "@db";
import { requestDb } from "@db/schema";

export default defineEventHandler(() => {
  return useDrizzle()
    .select()
    .from(requestDb)
    .where(isNull(requestDb.approved));
});

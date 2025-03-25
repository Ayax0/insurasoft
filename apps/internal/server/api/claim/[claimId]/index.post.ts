import { eq } from "@db";
import { claimDb, claimUpdateSchema } from "@db/schema";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  const { claimId } = await getValidatedRouterParams(
    event,
    z.object({ claimId: z.coerce.number() }).parse,
  );
  const data = await readValidatedBody(event, claimUpdateSchema.parse);
  return useDrizzle()
    .update(claimDb)
    .set(data)
    .where(eq(claimDb.id, claimId))
    .returning();
});

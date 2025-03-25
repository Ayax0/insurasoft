import { eq } from "@db";
import { claimDb } from "@db/schema";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  const { claimId } = await getValidatedRouterParams(
    event,
    z.object({ claimId: z.coerce.number() }).parse,
  );

  return useDrizzle().query.claimDb.findFirst({
    where: eq(claimDb.id, claimId),
  });
});

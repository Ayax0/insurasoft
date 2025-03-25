import { eq } from "@db";
import { requestDb } from "@db/schema";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  const { requestId } = await getValidatedRouterParams(
    event,
    z.object({ requestId: z.coerce.number() }).parse,
  );

  return useDrizzle().query.requestDb.findFirst({
    where: eq(requestDb.id, requestId),
  });
});

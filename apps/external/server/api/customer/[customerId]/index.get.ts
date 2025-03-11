import { z } from "zod";
import { eq } from "@db";
import { customerDb } from "@db/schema";

export default defineEventHandler(async (event) => {
  const { customerId } = await getValidatedRouterParams(
    event,
    z.object({ customerId: z.coerce.number() }).parse,
  );

  return useDrizzle().query.customerDb.findFirst({
    where: eq(customerDb.id, customerId),
  });
});

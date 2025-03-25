import { z } from "zod";

export default defineEventHandler(async (event) => {
  const { fileId } = await getValidatedRouterParams(
    event,
    z.object({ fileId: z.coerce.number() }).parse,
  );

  return readFile(fileId);
});

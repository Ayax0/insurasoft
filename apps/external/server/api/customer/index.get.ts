import { customerDb } from "@db/schema";

export default defineEventHandler(() => {
  return useDrizzle().select().from(customerDb);
});

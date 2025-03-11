import { join } from "pathe";
import { eq } from "@db";

import { fileDb } from "@db/schema";

export default async function (id: number) {
  const [index] = await useDrizzle()
    .delete(fileDb)
    .where(eq(fileDb.id, id))
    .returning({
      id: fileDb.id,
      path: fileDb.path,
      extname: fileDb.extname,
    });

  if (!index) throw createError({ statusCode: 404, message: "File not found" });

  const filename = [index.id, index.extname].join("");
  const filepath = index.path ? join(index.path, filename) : filename;

  await useStorage("file").removeItem(filepath);
}

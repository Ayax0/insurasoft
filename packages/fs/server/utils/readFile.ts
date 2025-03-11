import { eq } from "@db";
import { join } from "pathe";

import { fileDb } from "@db/schema";

export default async function (id: number) {
  const [file] = await useDrizzle()
    .select({
      id: fileDb.id,
      path: fileDb.path,
      extname: fileDb.extname,
    })
    .from(fileDb)
    .where(eq(fileDb.id, id))
    .limit(1);

  if (!file) throw createError({ statusCode: 404, message: "File not found" });

  const filename = [file.id, file.extname].join("");
  const filepath = file.path ? join(file.path, filename) : filename;

  return useStorage("file").getItemRaw<Buffer>(filepath);
}

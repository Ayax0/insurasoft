import type { MultiPartData } from "h3";
import { extname, join } from "pathe";
import { eq } from "@db";

import { fileDb } from "@db/schema";

export default async function (id: number, file: MultiPartData) {
  const ext = file.filename ? extname(file.filename) : null;
  const [prev] = await useDrizzle()
    .select({ id: fileDb.id, extname: fileDb.extname, path: fileDb.path })
    .from(fileDb)
    .where(eq(fileDb.id, id));
  if (!prev)
    throw createError({ statusCode: 404, statusMessage: "File not found" });
  if (prev.extname !== ext) {
    const _filename = [prev.id, prev.extname].join("");
    const _filepath = prev.path ? join(prev.path, _filename) : _filename;
    await useStorage("file").removeItem(_filepath);
  }

  const [index] = await useDrizzle()
    .update(fileDb)
    .set({
      name: file.filename,
      extname: file.filename ? extname(file.filename) : null,
      mimetype: file.type,
      size: file.data.length,
    })
    .where(eq(fileDb.id, id))
    .returning();

  if (!index)
    throw createError({ statusCode: 404, statusMessage: "File not found" });

  const filename = [index.id, index.extname].join("");
  const filepath = index.path ? join(index.path, filename) : filename;

  await useStorage("file").setItemRaw(filepath, file.data);
  return {
    id: index.id,
    name: index.name,
    extname: index.extname,
    mimetype: index.mimetype,
    size: index.size,
  };
}

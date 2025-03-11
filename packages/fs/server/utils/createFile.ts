import { fileDb } from "@db/schema";
import { extname, join } from "pathe";
import type { MultiPartData } from "h3";

export default async function (file: MultiPartData, path?: string) {
  const [index] = await useDrizzle()
    .insert(fileDb)
    .values({
      path,
      name: file.filename,
      extname: file.filename ? extname(file.filename) : null,
      mimetype: file.type,
      size: file.data.length,
    })
    .returning({
      id: fileDb.id,
      name: fileDb.name,
      extname: fileDb.extname,
      mimetype: fileDb.mimetype,
      size: fileDb.size,
    });

  if (!index)
    throw createError({ statusCode: 500, message: "Failed to write file" });

  const filename = [index.id, index.extname].join("");
  const filepath = path ? join(path, filename) : filename;

  await useStorage("file").setItemRaw(filepath, file.data);
  return index;
}

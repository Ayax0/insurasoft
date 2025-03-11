import type { H3Event } from "h3";

export default async function (event: H3Event) {
  const files = await readMultipartFormData(event);

  if (!files)
    throw createError({
      statusCode: 400,
      statusMessage: "file missing",
    });

  return files;
}

import type { H3Event } from "h3";

export default async function (event: H3Event) {
  const files = await readMultipartFormData(event);

  if (!files || !files[0])
    throw createError({
      statusCode: 400,
      statusMessage: "file missing",
    });

  return files[0];
}

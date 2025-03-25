export default defineEventHandler(async (event) => {
  const file = await getRequestFile(event);
  return createFile(file);
});

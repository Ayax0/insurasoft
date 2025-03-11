import fsDriver from "unstorage/drivers/fs-lite";

export default defineNitroPlugin(() => {
  useStorage().mount("file", fsDriver({ base: useRuntimeConfig().storage }));
});

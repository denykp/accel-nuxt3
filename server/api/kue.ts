export default defineEventHandler(async (event) => {
  const kue = getCookie(event, "kue");
  return kue;
});

export default defineEventHandler(async (event) => {
  const kue = deleteCookie(event, "kue");
  return "success";
});

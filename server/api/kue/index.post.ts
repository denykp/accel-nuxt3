export default defineEventHandler(async (event) => {
  setCookie(event, "kue", "donat", { httpOnly: true });
  return "success";
});

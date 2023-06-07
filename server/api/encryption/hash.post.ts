import { createHmac } from "node:crypto";

export default defineEventHandler(async (event) => {
  const secretKey = "rahasia";
  const body = await readBody(event);

  const hmac = createHmac("sha256", secretKey);
  hmac.update(body);
  return hmac.digest("base64");
});

import { jwtVerify } from 'jose';

export default async function getDatafromToken(req) {
  try {
    const cookies = req.headers.cookie || "";
    const token = cookies.split('; ').find(c => c.startsWith("token="))?.split('=')[1];

    if (!token) {
      throw new Error("Token is missing");
    }

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.TOKEN_SECRET)
    );

    return payload.id;
  } catch (error) {
    console.error("Error decoding token:", error.message);
    throw new Error("Invalid or expired token");
  }
}

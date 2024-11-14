import jwt from "jsonwebtoken";

export const getDatafromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return decodedToken.id
    } catch (error) {
        throw new Error("Invalid token");
    }
}
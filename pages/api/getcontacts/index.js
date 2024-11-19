import getDatafromToken from "@/helpers/getDatafromToken";
import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/user";

connect();

export default async function Getcontacts(req, res) {
    if (req.method === "GET") {
        try {
            const user_id = await getDatafromToken(req);
            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json({ contacts: user.contacts });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    }
}
import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";
import { getDatafromToken } from "@/helpers/getDatafromToken";

connect();

export default async function Settings(req, res) {
    if (req.method === "POST") {

        const user_id=getDatafromToken();
        const { firstName, lastName, newPassword, profilePicture } = req.body;
       
        console.log('Saving changes:', { firstName, lastName, newPassword, profilePicture });
        return res.status(200).json({ message: "Changes saved successfully!" });
    }
}
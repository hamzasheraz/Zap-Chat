import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";
import { getDatafromToken } from "@/helpers/getDatafromToken";
import bycrptjs from "bcryptjs";

connect();

export default async function Settings(req, res) {
    if (req.method === "POST") {
        try {
            const user_id = getDatafromToken(req);
            const { firstName, lastName, newPassword, profilePicture } = req.body.user;

            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            if (firstName) user.firstName = firstName;
            if (lastName) user.lastName = lastName;
            if (newPassword) {
                const salt = await bycrptjs.genSalt(10);
                const hashedPassword = await bycrptjs.hash(newPassword, salt);
                user.password = hashedPassword;
            }

            if (profilePicture) user.profilePicture = profilePicture;

            await user.save();
            return res.status(200).json({ message: "Changes saved successfully!" });
        } catch (error) {
            console.error("Error saving changes:", error);
            return res.status(500).json({ message: "An error occurred while saving changes." });
        }
    }
}
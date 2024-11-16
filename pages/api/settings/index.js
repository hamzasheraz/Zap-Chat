import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";
import getDatafromToken from "@/helpers/getDatafromToken";
import bycrptjs from "bcryptjs";
import path from "path";
import fs from "fs";

connect();

export default async function Settings(req, res) {
    if (req.method === "POST") {
        try {
            const user_id = await getDatafromToken(req);
            const { firstName, lastName, newPassword, profilePicture, currentPassword } = req.body.updatedFields;

            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const isMatch = await bycrptjs.compare(currentPassword, user.password);

            if (!isMatch) {
                return res.status(400).json({ error: "Invalid Current Password" });
            }

            if (firstName) user.firstName = firstName;
            if (lastName) user.lastName = lastName;
            if (newPassword) {
                const salt = await bycrptjs.genSalt(10);
                const hashedPassword = await bycrptjs.hash(newPassword, salt);
                user.password = hashedPassword;
            }

            if (profilePicture) {
                const base64Data = profilePicture.replace(/^data:image\/\w+;base64,/, "");
                const buffer = Buffer.from(base64Data, "base64");
                const imagePath = path.join(process.cwd(), "public/uploads", `${user_id}-profile.jpg`);
                fs.mkdirSync(path.dirname(imagePath), { recursive: true });
                fs.writeFileSync(imagePath, buffer);
                user.profilePicture = `/uploads/${user_id}-profile.jpg`;
            }

            await user.save();
            return res.status(200).json({ message: "Changes saved successfully!" });
        } catch (error) {
            console.error("Error saving changes:", error);
            return res.status(500).json({ message: "An error occurred while saving changes." });
        }
    }
}
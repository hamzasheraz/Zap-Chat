import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/user";
import bcryptjs from "bcryptjs";

connect();

export default async function Changepassword(req, res) {
    if (req.method === 'POST') {
        try {
            const { token, newPassword } = req.body.user;
            const user = await User.findOne({ forgotPasswordToken: token, forgotPasswordTokenExpiry: { $gt: Date.now() } });

            if (!user) {
                return res.status(400).json({ error: "Invalid token" })
            }

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(newPassword, salt);

            user.password = hashedPassword;

            user.forgotPasswordToken = undefined;
            user.forgotPasswordTokenExpiry = undefined;
            await user.save();

            return res.status(201).json({
                message: 'Password Updated Successfully'
            })
        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}
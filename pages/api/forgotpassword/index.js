import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";
import { sendEmail } from "@/helpers/mailer";

connect();

export default async function Forgotpassword(req, res) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ error: 'User Does Not Exist!' })
            }

            await sendEmail({
                email, emailType: "RESET", userId: user._id
            })

            return res.status(200).json({ message: "Email Sent" })

        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}
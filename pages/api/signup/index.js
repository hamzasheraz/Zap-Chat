import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/user";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export default async function Signup(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, phoneNumber, password } = req.body;
        if (!firstName || !lastName || !email || !phoneNumber || !password) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        try {
            const user = new User({
                firstName,
                lastName,
                email,
                phoneNumber,
                password:hashedPassword,
            });
            const savedUser=await user.save();
            await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});
            res.status(201).json({ message: "Your Account has been created Successfully.Check your email to verify your email." });
        } catch (error) {
            console.log(error);
            if (error.code === 11000) {
                return res.status(422).json({ error: "User already exists" });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
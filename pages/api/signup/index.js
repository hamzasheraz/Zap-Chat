import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";
import bcryptjs from "bcryptjs";

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
            await user.save();
            res.status(201).json({ message: "Your Account has been created Successfully" });
        } catch (error) {
            console.log(error);
            if (error.code === 11000) {
                return res.status(422).json({ error: "User already exists" });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/User";
import bcryptjs from "bcryptjs";

connect();

export async function Signup(req, res) {
    if (req.method === "POST") {
        const { firstname, lastname, email, phone, password } = req.body;
        if (!firstname || !lastname || !email || !phone || !password) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        try {
            const user = new User({
                firstname,
                lastname,
                email,
                phone,
                hashedPassword,
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
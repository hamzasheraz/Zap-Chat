import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export default async function Login(req, res) {
    if (req.method === 'POST') {
        const cookie = require('cookie');
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "User does not exist" });
            }

            const isMatch = await bycrptjs.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ error: "Invalid Credentials" });
            }

            const tokenData = {
                id: user._id,
                email: user.email
            }

            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1h' });

            res.setHeader('Set-Cookie', cookie.serialize('token', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60, // 1 hour expiry in seconds
                path: '/', // The cookie is available on all routes
            }));

            return res.status(200).json({ message: "Login Successful", token });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    }
}
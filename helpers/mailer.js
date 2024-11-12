import nodemailer from "nodemailer";
import User from "@/backend/models/usermodel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
            });
        }

        var transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: "hamzasheraz429@gmail.com",
            to: email,
            subject:
                emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN
                }${emailType === "VERIFY" ? "verifyemail" : "changepass"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"
                }
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN
                }${emailType === "VERIFY" ? "verifyemail" : "changepass"}?token=${hashedToken}
            </p>`,
        };

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;
    } catch (error) {
        throw new Error(error.message);
    }
};
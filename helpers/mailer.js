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
            from: "hamzasheraz420@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Zap Chat account" : "Reset your Zap Chat password",
            html: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"}</title>
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; border-radius: 5px;">
                  <tr>
                    <td style="padding: 20px;">
                      <h1 style="color: #4a5568; text-align: center; margin-bottom: 20px;">
                        <span style="color: #ecc94b;">⚡</span> Zap Chat
                      </h1>
                      <div style="background-color: #ffffff; border-radius: 5px; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <h2 style="color: #4a5568; margin-top: 0;">
                          ${emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"}
                        </h2>
                        <p style="margin-bottom: 20px;">
                          ${emailType === "VERIFY"
                    ? "Thank you for signing up with Zap Chat! Please verify your email to get started."
                    : "We received a request to reset your Zap Chat password. If you didn't make this request, please ignore this email."}
                        </p>
                        <a href="${process.env.DOMAIN}${emailType === "VERIFY" ? "verifyemail" : "changepassword"}?token=${hashedToken}"
                           style="display: inline-block; background-color: #4a5568; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
                          ${emailType === "VERIFY" ? "Verify Email" : "Reset Password"}
                        </a>
                        <p style="margin-top: 20px; font-size: 14px; color: #718096;">
                          If the button above doesn't work, copy and paste this link into your browser:
                        </p>
                        <p style="font-size: 14px; word-break: break-all; color: #4a5568;">
                          ${process.env.DOMAIN}${emailType === "VERIFY" ? "verifyemail" : "changepassword"}?token=${hashedToken}
                        </p>
                      </div>
                      <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #718096;">
                        This is an automated email. Please do not reply.
                      </p>
                    </td>
                  </tr>
                </table>
              </body>
              </html>`};

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;
    } catch (error) {
        throw new Error(error.message);
    }
};
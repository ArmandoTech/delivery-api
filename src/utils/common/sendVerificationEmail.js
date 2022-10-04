import { transporter } from "../../config/nodemailer.js";
import { EMAIL_NODEMAILER } from "../../env/nodemailer.js";
import { API_BASE_URL } from "../../env/server.js";

export const sendVerificationEmail = async (email, token) => {
	const res = await transporter.sendMail({
		from: `Delivery ${EMAIL_NODEMAILER}`,
		to: email,
		subject: "✔ Verify email ✔",
		text: `${API_BASE_URL}/auth/verify-register?token=${token}`
	});

	return res;
};

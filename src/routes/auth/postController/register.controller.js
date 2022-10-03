import { VIRIFY_EMAIL } from "../../../constants/msgs.js";
import { createToken } from "../../../utils/createToken.js";
import { createUser } from "../../../utils/createUser.js";
import { sendVerificationEmail } from "../../../utils/sendVerificationEmail.js";

export const registerController = async (req, res, next) => {
	try {
		const user = await createUser(req.body);
		const token = createToken({ userId: user._id }, "1h");
		await sendVerificationEmail(user.email, token);
		res.status(201).json({ msg: VIRIFY_EMAIL });
	} catch (error) {
		next(error);
	}
};

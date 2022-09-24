import {
	CREDENTIALS_NOT_AVALIABLE,
	VIRIFY_EMAIL
} from "../../../constants/msgs.js";
import { createToken } from "../../../utils/createToken.js";
import { findOrCreateUser } from "../../../utils/findOrCreateUser.js";
import { sendVerificationEmail } from "../../../utils/sendVerificationEmail.js";

export const registerController = async (req, res, next) => {
	try {
		const [user, created] = await findOrCreateUser(req.body);
		if (!created && user.verify)
			return res.status(400).json({ msg: CREDENTIALS_NOT_AVALIABLE });
		const token = createToken({ userId: user._id }, "1h");
		await sendVerificationEmail(user.email, token);
		res.status(201).json({ msg: VIRIFY_EMAIL });
	} catch (error) {
		next(error);
	}
};

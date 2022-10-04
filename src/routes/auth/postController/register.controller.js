import { VIRIFY_EMAIL } from "../../../constants/msgs.js";
import { createToken } from "../../../utils/auth/createToken.js";
import { sendVerificationEmail } from "../../../utils/common/sendVerificationEmail.js";
import { createUser } from "../../../utils/users/createUser.js";

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

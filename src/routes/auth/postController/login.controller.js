import {
	UNREGISTERED_USER,
	USER_NOT_VERIFIED
} from "../../../constants/msgs.js";
import { login } from "../../../utils/auth/login.js";
import { createToken } from "../../../utils/createToken.js";

export const loginController = async (req, res, next) => {
	try {
		const user = await login(req.body);
		if (!user) return res.status(404).json({ msg: UNREGISTERED_USER });
		if (user?.msg) return res.status(400).json({ msg: user.msg });
		if (!user?.verify) return res.status(401).json({ msg: USER_NOT_VERIFIED });
		const token = createToken({ userId: user._id }, "24h");
		const dataUser = {
			username: user.username,
			email: user.email,
			role: user.role,
			name: user.name,
			token
		};
		res.status(200).json(dataUser);
	} catch (error) {
		next(error);
	}
};

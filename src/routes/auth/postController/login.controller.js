import { createToken } from "../../../utils/auth/createToken.js";
import { login } from "../../../utils/auth/login.js";

export const loginController = async (req, res, next) => {
	try {
		const user = await login(req.body);
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

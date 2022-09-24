import jwt from "jsonwebtoken";
import {
	NO_TOKEN,
	SUCCESSFUL_REGISTRATION,
	UNAUTHORIZED
} from "../../../constants/msgs.js";
import { SECRET } from "../../../env/server.js";
import { User } from "../../../models/User.js";

export const verifyRegisterController = async (req, res, next) => {
	try {
		const { token } = req.query;
		if (!token) return res.status(400).json({ msg: NO_TOKEN });
		const { userId } = jwt.verify(token, SECRET);
		const user = await User.findById(userId).exec();
		if (!user) return res.status(401).json({ msg: UNAUTHORIZED });
		user.verify = true;
		await user.save();
		res.json({ msg: SUCCESSFUL_REGISTRATION });
	} catch (error) {
		next(error);
	}
};

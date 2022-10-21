import jwt from "jsonwebtoken";
import {
	NO_TOKEN,
	UNAUTHORIZED,
	UNREGISTERED_USER,
	USER_NOT_ACTIVE,
	USER_NOT_VERIFIED
} from "../constants/msgs.js";
import { SECRET } from "../env/server.js";
import { User } from "../models/User.js";

export const validateToken = async (req, res, next) => {
	try {
		const { token } = req.headers;
		if (!token) return res.status(400).json({ msg: NO_TOKEN });
		const { userId } = jwt.verify(token, SECRET); // throw err if is invalid
		const user = await User.findById(userId).exec();
		if (!user) return res.status(401).json({ msg: UNREGISTERED_USER });
		if (!user.active) return res.status(401).json({ msg: USER_NOT_ACTIVE });
		if (!user.verify) return res.status(401).json({ msg: USER_NOT_VERIFIED });
		req.user = user;
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: UNAUTHORIZED });
	}
};

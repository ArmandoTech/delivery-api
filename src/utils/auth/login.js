import {
	BAD_CREDENTIALS,
	REQUIRED_EMAIL_OR_USERNAME,
	REQUIRED_PASSWORD
} from "../../constants/msgs.js";
import { User } from "../../models/User.js";
import { comparePassword } from "../comparePassword.js";

export const login = async ({ email, username, password }) => {
	if (!password) throw TypeError(REQUIRED_PASSWORD);
	if (!email && !username) throw TypeError(REQUIRED_EMAIL_OR_USERNAME);
	const user = await User.findOne({ $or: [{ email }, { username }] }).exec();
	if (!user) return null;
	const isRightPassword = await comparePassword(password, user.password);
	if (!isRightPassword) return { msg: BAD_CREDENTIALS };

	return user;
};

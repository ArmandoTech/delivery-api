import { CustomError } from "../../classes/CustomError.js";
import {
	BAD_CREDENTIALS,
	REQUIRED_EMAIL_OR_USERNAME,
	REQUIRED_PASSWORD,
	UNREGISTERED_USER,
	USER_NOT_VERIFIED
} from "../../constants/msgs.js";
import { User } from "../../models/User.js";
import { comparePassword } from "./comparePassword.js";

export const login = async ({ email, username, password }) => {
	if (!password)
		throw new CustomError({ message: REQUIRED_PASSWORD, status: 400 });
	if (!email && !username)
		throw new CustomError({ message: REQUIRED_EMAIL_OR_USERNAME, status: 400 });
	const user = await User.findOne({ $or: [{ email }, { username }] }).exec();
	if (!user) throw new CustomError({ message: UNREGISTERED_USER, status: 400 });
	if (!user.verify)
		throw new CustomError({ message: USER_NOT_VERIFIED, status: 401 });
	const isRightPassword = await comparePassword(password, user.password);
	if (!isRightPassword)
		throw new CustomError({ message: BAD_CREDENTIALS, status: 400 });

	return user;
};

import { User } from "../models/User.js";
import { encryptPassword } from "./encryptPassword.js";

export const findOrCreateUser = async ({ username, email, password }) => {
	const user = await User.findOne({ email }).exec();
	if (user) return [user, false];
	else {
		const newUser = User({
			username,
			email,
			password: await encryptPassword(password)
		});
		const user = await newUser.save();
		return [user, true];
	}
};

import { User } from "../models/User.js";
import { encryptPassword } from "./encryptPassword.js";

export const createUser = async ({ username, email, password }) => {
	const newUser = User({
		username,
		email,
		password: await encryptPassword(password)
	});
	const user = await newUser.save();

	return user;
};

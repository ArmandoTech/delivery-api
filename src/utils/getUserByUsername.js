import { User } from "../models/User.js";

export const getUserByUsernameRegex = async param => {
	const { username } = param;
	const user = User.findOne({ username: { $regex: username, $options: "i" } });
	return user;
};

import { User } from "../models/User.js";

export const createUser = async ({ username, email, password }) => {
	const newUser = User({ username, email, password });
	const user = await newUser.save();

	return user;
};

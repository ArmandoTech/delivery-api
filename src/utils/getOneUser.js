import { User } from "../models/User.js";

export const getOneUser = async query => {
	const { id } = query;
	const user = User.findById(id);
	return user;
};

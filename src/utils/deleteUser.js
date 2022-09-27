import { User } from "../models/User.js";

export const deleteUser = async params => {
	const { id } = params;
	const user = User.findOneAndUpdate(id, { active: false });
	return user;
};

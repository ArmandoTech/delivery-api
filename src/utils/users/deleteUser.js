import { User } from "../../models/User.js";

export const deleteUser = async params => {
	const { id } = params;
	const user = await User.findOneAndUpdate(id, { active: false });
	return user;
};

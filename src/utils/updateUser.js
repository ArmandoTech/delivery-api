import { User } from "../models/User.js";

export const updateUser = async (params, body) => {
	const { id } = params;
	const { username, email, password, img, phone } = body;
	const user = await User.findOneAndUpdate(id, {
		username,
		email,
		password,
		img,
		phone
	});
	return user;
};

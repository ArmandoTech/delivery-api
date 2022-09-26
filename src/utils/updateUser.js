import { User } from "../models/users.js";

export const updateUser = async (query, body) => {
	const { id } = query;
	const { username, email, password, img, phone } = body;
	const user = User.findOneAndUpdate(id, {
		username,
		email,
		password,
		img,
		phone
	});
	return user;
};

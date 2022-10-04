import { User } from "../../models/User.js";

export const updateUser = async (params, body) => {
	const { id } = params;
	const { username, email, password, img, phone, name } = body;
	const user = await User.findByIdAndUpdate(
		id,
		{
			name,
			username,
			email,
			password,
			img,
			phone
		},
		{ new: true }
	);
	return user;
};

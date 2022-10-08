import { User } from "../../models/User.js";

export const updateUserByAdmin = async (params, body) => {
	const { id } = params;
	const { username, role, verify } = body;
	const user = await User.findByIdAndUpdate(
		id,
		{
			username,
			role,
			verify
		},
		{ new: true }
	);
	return user;
};

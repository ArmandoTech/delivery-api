import { LIMIT_USERS } from "../constants/limits.js";
import { User } from "../models/users.js";

export const getUser = async queries => {
	const { limit = LIMIT_USERS, page = 0 } = queries;
	const users = await User.find()
		.skip(page * limit)
		.limit(limit)
		.exec();

	console.log(users);
	return users;
};

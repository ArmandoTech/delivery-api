import { LIMIT_USERS } from "../constants/limits.js";
import { User } from "../models/User.js";

export const getUser = async queries => {
	const { page = 0, limit = LIMIT_USERS } = queries;
	const search = addQueriesFind(queries);
	if (search.username) {
		const regexUser = User.findOne({
			username: { $regex: search.username, $options: "i" }
		});
		return regexUser;
	}
	const users = await User.find(search)
		.limit(limit)
		.skip(page * limit)
		.exec();

	const count = await User.countDocuments();
	const totalPages = Math.ceil(count / limit);
	return { users, count, totalPages, currenPage: page };
};

const addQueriesFind = queries => {
	const { active, role, username, email } = queries;
	const queryFind = {};
	if (active) queryFind.active = active;
	if (role) queryFind.role = role;
	if (username) queryFind.username = username;
	if (email) queryFind.email = email;
	return queryFind;
};

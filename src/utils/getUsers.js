import { LIMIT_USERS } from "../constants/limits.js";
import { User } from "../models/User.js";

export const getUser = async queries => {
	const { page = 0, limit = LIMIT_USERS } = queries;
	const search = addQueriesFind(queries);
	const count = await User.countDocuments(search);
	const totalPages = Math.ceil(count / limit);

	if (search.username) {
		const regexUsername = await User.findOne({
			username: { $regex: search.username, $options: "i" }
		});
		return regexUsername;
	}
	if (search.name) {
		const regexName = await User.findOne({
			name: { $regex: search.name, $options: "i" }
		});
		return regexName;
	}
	const users = await User.find(search)
		.limit(limit)
		.skip(page * limit)
		.exec();

	return { users, count, totalPages, currentPage: page };
};

const addQueriesFind = queries => {
	const { active, role, username, email, name } = queries;
	const queryFind = {};
	if (active) queryFind.active = active;
	if (role) queryFind.role = role;
	if (username) queryFind.username = username;
	if (email) queryFind.email = email;
	if (name) queryFind.name = name;
	return queryFind;
};

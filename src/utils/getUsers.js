import { LIMIT_USERS } from "../constants/limits.js";
import { User } from "../models/User.js";

export const getUser = async queries => {
	const { page = 0, limit = LIMIT_USERS } = queries;
	const search = addQueriesFind(queries);
	const count = await User.countDocuments();
	const totalPages = Math.ceil(count / limit);

	const users = await User.find(search)
		.limit(limit)
		.skip(page * limit)
		.exec();

	return { count, totalPages, currentPage: page, users };
};

const addQueriesFind = queries => {
	const { active, role, username, email, name } = queries;
	const queryFind = {};
	if (active) queryFind.active = active;
	if (role) queryFind.role = role;
	if (username) queryFind.username = new RegExp(username);
	if (email) queryFind.email = email;
	if (name) queryFind.name = new RegExp(name);
	return queryFind;
};

import { LIMIT_USERS } from "../constants/limits.js";
import { User } from "../models/users.js";

export const getUser = async queries => {
	const { page = 0, limit = LIMIT_USERS } = queries;
	const users = await User.find(addQueriesFind(queries))
		.limit(limit)
		.skip(page * limit)
		.exec();

	const count = await User.countDocuments();
	const totalPages = Math.ceil(count / limit);
	return { users, count, totalPages, currenPage: page };
};

const addQueriesFind = queries => {
	const { deleted, role, name, surname, email } = queries;
	const queryFind = {};
	if (deleted) queryFind.deleted = deleted;
	if (role) queryFind.role = role;
	if (name) queryFind.name = name;
	if (surname) queryFind.surname = surname;
	if (email) queryFind.email = email;
	return queryFind;
};

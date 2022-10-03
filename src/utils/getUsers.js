import { LIMIT_USERS } from "../constants/limits.js";
import { User } from "../models/User.js";
import { getPaginatedModel } from "./getPaginatedModel.js";

export const getUser = async queries => {
	const { page = 0, limit = LIMIT_USERS } = queries;
	const filters = addQueriesFind(queries);
	const users = await getPaginatedModel(User, {
		query: { ...filters, select: "_id role username email name" },
		limit,
		page
	});
	return { collection: "users", ...users };
};

const addQueriesFind = queries => {
	const { active, role, username, email, name } = queries;
	const queryFind = {};
	if (active) queryFind.active = active;
	if (role) queryFind.role = role;
	if (username) queryFind.username = new RegExp(username);
	if (email) queryFind.email = email;
	if (name) queryFind.name = new RegExp(name, "i");
	return queryFind;
};

import { LIMIT_USERS } from "../../constants/limits.js";
import { User } from "../../models/User.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";

export const getUser = async queries => {
	const { page, limit = LIMIT_USERS } = queries;
	const filters = addQueriesFind(queries);
	const users = await getPaginatedModel(User, {
		query: { ...filters, select: "_id active role username email name" },
		limit,
		page,
		collection: "users"
	});
	return { ...users };
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

import { Order } from "../../models/Order.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";
import { ADMIN } from "../../constants/roles.js";
import { User } from "../../models/User.js";
import { Detail } from "../../models/OrderDetail.js";

export const getAllOrders = async (id, role) => {
	const populate = [
		{
			path: "user",
			model: User,
			select: "_id email name"
		},
		{
			path: "details",
			model: Detail,
			select: "-_id"
		}
	];
	return await getPaginatedModel(Order, {
		collection: "orders",
		query: role === ADMIN ? {} : { user: id },
		populate
	});
};

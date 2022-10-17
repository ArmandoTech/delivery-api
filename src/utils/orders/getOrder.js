import { Order } from "../../models/Order.js";
import { Detail } from "../../models/OrderDetail.js";
import { Product } from "../../models/Product.js";
import { User } from "../../models/User.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";

export const getOrder = async query => {
	const populate = [
		{
			path: "user",
			model: User,
			select: "_id email name"
		},
		{
			path: "details",
			model: Detail,
			populate: [{ path: "product", model: Product }],
			select: "-_id"
		}
	];

	return await getPaginatedModel(Order, {
		query,
		collection: "orders",
		populate
	});
};

import { Order } from "../../models/Order.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";

export const getOrdersByUser = async userId => {
	return await getPaginatedModel(Order, { query: { userId } });
};

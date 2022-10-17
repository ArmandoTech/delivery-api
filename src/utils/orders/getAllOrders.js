import { Order } from "../../models/Order.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";

export const getAllOrders = async user => {
	return await getPaginatedModel(Order, { collection: "orders" });
};

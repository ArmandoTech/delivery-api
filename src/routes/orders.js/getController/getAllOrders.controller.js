import { getAllOrders } from "../../../utils/orders/getAllOrders.js";

export const getAllOrdersController = async (req, res, next) => {
	try {
		res.status(200).json(await getAllOrders());
	} catch (error) {
		next(error);
	}
};

import { getAllOrders } from "../../../utils/orders/getAllOrders.js";

export const getAllOrdersController = async (req, res, next) => {
	try {
		const { user } = req;
		res.status(200).json(await getAllOrders(user._id, user.role));
	} catch (error) {
		next(error);
	}
};

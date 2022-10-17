import { getOrder } from "../../../utils/orders/getOrder.js";

export const getOrdersByUserController = async (req, res, next) => {
	try {
		const { user } = req.params;
		res.status(200).json(await getOrder({ user }));
	} catch (error) {
		next(error);
	}
};

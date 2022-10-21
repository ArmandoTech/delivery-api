import { createOrder } from "../../../utils/orders/createOrder.js";

export const postOrderController = async (req, res, next) => {
	try {
		await createOrder(req.body, req.user);

		res.status(201).json({
			msg: `Orden creada correctamente.`
		});
	} catch (error) {
		next(error);
	}
};

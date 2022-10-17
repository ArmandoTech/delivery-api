import { updateOrder } from "../../../utils/orders/updateOrder.js";

export const putOrderController = async (req, res, next) => {
	try {
		await updateOrder(req.params.id, req.body);
		res.status(200).json({
			msg: "Actualización realizada correctamente."
		});
	} catch (error) {
		next(error);
	}
};

import { updateOrder } from "../../../utils/orders/updateOrder.js";

export const putOrderController = async (req, res, next) => {
	try {
		const { params, body, user } = req;
		await updateOrder({ id: params.id, body, user });
		res.status(200).json({
			msg: "Actualización realizada correctamente."
		});
	} catch (error) {
		next(error);
	}
};

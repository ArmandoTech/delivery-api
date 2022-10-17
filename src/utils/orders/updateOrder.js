import { CustomError } from "../../classes/CustomError.js";
import { CANT_UPDATE_CLOSED_ORDER } from "../../constants/msgs.js";
import { Order } from "../../models/Order.js";

export const updateOrder = async (id, body) => {
	const document = await Order.findById(id).exec();
	if (document.status === "canceled" || document.status === "delivered")
		throw new CustomError({ message: CANT_UPDATE_CLOSED_ORDER, status: 400 });
	return await Order.findByIdAndUpdate(id, body);
};

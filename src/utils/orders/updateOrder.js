import { CustomError } from "../../classes/CustomError.js";
import {
	CANT_UPDATE_CLOSED_ORDER,
	INVALID_USER
} from "../../constants/msgs.js";
import {
	CANCELED_ORDER,
	DELIVERED_ORDER
} from "../../constants/orderStatus.js";
import { Order } from "../../models/Order.js";

export const updateOrder = async ({ id, body, user }) => {
	const document = await Order.findById(id).exec();
	if (document.status === CANCELED_ORDER || document.status === DELIVERED_ORDER)
		throw new CustomError({ message: CANT_UPDATE_CLOSED_ORDER, status: 400 });

	if (document.user.toString() !== user._id.toString())
		throw new CustomError({ message: INVALID_USER, status: 400 });

	return await document.update(body).exec();
};

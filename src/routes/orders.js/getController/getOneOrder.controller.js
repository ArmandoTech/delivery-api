import { getOrder } from "../../../utils/orders/getOrder.js";
import { Types } from "mongoose";

export const getOneOrderController = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.status(200).json(await getOrder({ _id: Types.ObjectId(id) }));
	} catch (error) {
		next(error);
	}
};

import { PRODUCT_DELETED } from "../../../constants/msgs.js";
import { deleteProduct } from "../../../utils/products/deleteProduct.js";

export const deleteProductController = async (req, res, next) => {
	try {
		await deleteProduct(req.params);
		res.status(200).json({ msg: PRODUCT_DELETED });
	} catch (error) {
		next(error);
	}
};

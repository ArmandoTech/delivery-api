import { PRODUCT_UPDATED } from "../../../constants/msgs.js";
import { updateProduct } from "../../../utils/products/updateProduct.js";

export const updateProductController = async (req, res, next) => {
	try {
		await updateProduct(req.params, req.body);
		res.status(200).json({ msg: PRODUCT_UPDATED });
	} catch (error) {
		next(error);
	}
};

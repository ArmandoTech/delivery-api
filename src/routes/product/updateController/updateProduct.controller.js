import { updateProduct } from "../../../utils/updateProduct.js";

export const updateProductController = async (req, res, next) => {
	try {
		await updateProduct(req.params, req.body);
		res.status(200).json({ msg: "Product updated successfully" });
	} catch (error) {
		next(error);
	}
};

import { deleteProduct } from "../../../utils/deleteProduct.js";

export const deleteProductController = async (req, res, next) => {
	try {
		await deleteProduct(req.params);
		res.status(200).json({ msg: "Product deleted successfully" });
	} catch (error) {
		next(error);
	}
};

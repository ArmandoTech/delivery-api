import { createProduct } from "../../../utils/createProduct.js";

export const createProductController = async (req, res, next) => {
	try {
		await createProduct(req.body);
		res.status(200).json({ msg: "Product created successfully" });
	} catch (error) {
		next(error);
	}
};

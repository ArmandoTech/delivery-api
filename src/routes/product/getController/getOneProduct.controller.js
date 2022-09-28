import { getProduct } from "../../../utils/getOneProduct.js";

export const getOneProductController = async (req, res, next) => {
	try {
		const product = getProduct(req.params);
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

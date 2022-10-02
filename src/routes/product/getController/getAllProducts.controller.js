import { getProduct } from "../../../utils/getProducts.js";

export const getAllProductsController = async (req, res, next) => {
	try {
		const products = await getProduct(req.query);
		res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

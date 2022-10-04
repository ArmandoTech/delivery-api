import { Product } from "../models/Product.js";

export const getProduct = async param => {
	const { id } = param;
	const product = await Product.findById(id);
	return product;
};

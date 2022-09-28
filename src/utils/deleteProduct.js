import { Product } from "../models/Product.js";

export const deleteProduct = async params => {
	const { id } = params;
	const deleteProduct = await Product.deleteOne({ _id: id });
	return deleteProduct;
};

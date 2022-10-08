import { Product } from "../../models/Product.js";

export const updateProduct = async (params, body) => {
	const { id } = params;
	const { name, description, price, img } = body;
	const product = await Product.findOneAndUpdate(id, {
		name,
		description,
		price,
		img
	});
	return product;
};

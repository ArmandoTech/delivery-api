import { Product } from "../../models/Product.js";

export const updateProduct = async (params, body) => {
	const { id } = params;
	const { title, description, price, img } = body;
	const product = await Product.findOneAndUpdate(id, {
		title,
		description,
		price,
		img
	});
	return product;
};

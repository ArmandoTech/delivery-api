import { Product } from "../models/Product.js";
import { addCategoriesToProducts } from "./addCategoriesToProducts.js";
import { findOrCreate } from "./findOrCreate.js";

export const createProduct = async body => {
	const { name, description, price, images, categories } = body;
	const [product, created] = await findOrCreate(
		Product,
		{ name },
		{
			images,
			price,
			description
		}
	);
	addCategoriesToProducts(product, categories);
	if (!created) throw TypeError("Product already exits");
};

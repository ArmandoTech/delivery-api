import { Product } from "../models/Product.js";
import { addCategoriesToProducts } from "./addCategoriesToProducts.js";
import { addProductsToCategories } from "./addProductsToCategories.js";
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
	try {
		await addCategoriesToProducts(product, categories);
		await addProductsToCategories(categories, product);
	} catch (error) {
		await Product.deleteOne({ _id: product._id }).exec();
	}
	if (!created) throw TypeError("Product already exits");
};

import { Product } from "../models/Product.js";
import { findOrCreate } from "./findOrCreate.js";

export const createProduct = async body => {
	const { name, description, price } = body;
	const [product, created] = await findOrCreate(
		Product,
		{ name },
		{
			price,
			description
		}
	);
	if (!created) throw TypeError("Product was not created");
};

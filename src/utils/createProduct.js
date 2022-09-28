import { Product } from "../models/Product.js";
import { findOrCreate } from "./findOrCreate.js";

export const createProduct = async body => {
	const { title, description, price, img } = body;
	return await findOrCreate(
		Product,
		{ title, price },
		{
			description,
			img
		}
	);
};

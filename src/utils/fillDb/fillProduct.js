import { productsMockUp } from "../../data/productsMockup.js";
import { findCategoryIdByName } from "../categoryQueries/findCategoryIdByName.js";
import { createProduct } from "../products/createProduct.js";
import { generateArrayPromises } from "../common/generateArrayPromises.js";

export const fillProduct = async () => {
	for (let i = 0; i < productsMockUp.length; i++) {
		const element = productsMockUp[i];
		element.categories = await findCategoryIdByName(element.categories);
	}
	const promiseCreateCategories = generateArrayPromises(
		productsMockUp,
		createProduct
	);
	await Promise.all(promiseCreateCategories);
};

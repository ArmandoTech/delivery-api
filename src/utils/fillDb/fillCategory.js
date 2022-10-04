import { categoriesMockup } from "../../data/categoriesMockup.js";
import { createCategory } from "../categoryQueries/createCategory.js";
import { generateArrayPromises } from "../common/generateArrayPromises.js";

export const fillCategory = async () => {
	const promiseCreateCategories = generateArrayPromises(
		categoriesMockup,
		createCategory
	);
	await Promise.all(promiseCreateCategories);
};

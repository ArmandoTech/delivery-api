import { LIMIT_CATEGORIES } from "../../constants/limits.js";
import { CategoryModel } from "../../models/Category.js";
import { getPaginatedModel } from "../getPaginatedModel.js";
import { stringNormalizer } from "../stringNormalizer.js";

export async function getCategories({ name, limit = LIMIT_CATEGORIES, page = 0, equals = "true" }) {
	const normalizedDisplay = new RegExp(stringNormalizer(name || ""));
	const query = { normalizedDisplay };
	const paginatedCategories = await getPaginatedModel(CategoryModel, { limit, page, query });

	paginatedCategories.categories = paginatedCategories.documents;
	delete paginatedCategories.documents;

	return paginatedCategories;
};

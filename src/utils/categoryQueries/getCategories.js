import { LIMIT_CATEGORIES } from "../../constants/limits.js";
import { CategoryModel } from "../../models/Category.js";
import { Product } from "../../models/Product.js";
import { getPaginatedModel } from "../getPaginatedModel.js";
import { stringNormalizer } from "../stringNormalizer.js";

export async function getCategories({
	name,
	limit = LIMIT_CATEGORIES,
	page = 0,
	equals = "true"
}) {
	const normalizedDisplay = new RegExp(stringNormalizer(name || ""));
	const query = { normalizedDisplay };
	const populate = { path: "products", model: Product, select: "-categories" };
	const paginatedCategories = await getPaginatedModel(CategoryModel, {
		limit,
		page,
		query,
		populate
	});

	paginatedCategories.categories = paginatedCategories.documents;
	delete paginatedCategories.documents;

	return paginatedCategories;
}

import { CustomError } from "../../classes/CustomError.js";
import { LIMIT_CATEGORIES } from "../../constants/limits.js";
import { Category } from "../../models/Category.js";
import { Product } from "../../models/Product.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";
import { stringNormalizer } from "../common/stringNormalizer.js";

export async function getCategories({
	name,
	limit = LIMIT_CATEGORIES,
	page = 0,
	equals = "true"
}) {
	const normalizedDisplay = new RegExp(stringNormalizer(name || ""));
	const query = { normalizedDisplay };
	const populate = { path: "products", model: Product, select: "-categories" };
	const paginatedCategories = await getPaginatedModel(Category, {
		limit,
		page,
		query,
		populate
	});

	if (paginatedCategories.countDocuments < 1)
		throw new CustomError({ status: 204, message: "" });

	paginatedCategories.categories = paginatedCategories.documents;
	delete paginatedCategories.documents;

	return paginatedCategories;
}

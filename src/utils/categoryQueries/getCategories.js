import { CustomError } from "../../classes/CustomError.js";
import { LIMIT_CATEGORIES } from "../../constants/limits.js";
import { Category } from "../../models/Category.js";
import { Product } from "../../models/Product.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";
import { stringNormalizer } from "../common/stringNormalizer.js";

export async function getCategories({
	name,
	limit = LIMIT_CATEGORIES,
	page,
	equals = "true"
}) {
	const normalizedDisplay = new RegExp(stringNormalizer(name || ""));
	const query = { normalizedDisplay };
	const populate = { path: "products", model: Product, select: "_id name" };
	const select = "_id display img";
	const paginatedCategories = await getPaginatedModel(Category, {
		collection: "categories",
		limit,
		page,
		query,
		select,
		populate
	});

	if (paginatedCategories.countDocuments < 1)
		throw new CustomError({ status: 204, message: "" });

	return paginatedCategories;
}

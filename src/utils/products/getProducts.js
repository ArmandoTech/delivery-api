import { LIMIT_PRODUCTS } from "../../constants/limits.js";
import { Category } from "../../models/Category.js";
import { Product } from "../../models/Product.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";
import { Types } from "mongoose";

export const getProduct = async queries => {
	const { page, limit = LIMIT_PRODUCTS } = queries;
	const query = addQueriesFind(queries);
	return await getPaginatedModel(Product, {
		collection: "products",
		query,
		limit,
		page,
		populate: { path: "categories", model: Category, select: "_id display" }
	});
};

const addQueriesFind = queries => {
	const { name, description, price, categoryId } = queries;
	const queryFind = {};
	if (name) queryFind.name = new RegExp(name, "i");
	if (description) queryFind.description = new RegExp(description, "i");
	if (price) queryFind.price = price;
	if (categoryId) queryFind.categories = Types.ObjectId(categoryId);
	return queryFind;
};

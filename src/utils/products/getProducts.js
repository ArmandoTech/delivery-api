import { LIMIT_PRODUCTS } from "../../constants/limits.js";
import { Category } from "../../models/Category.js";
import { Product } from "../../models/Product.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";

export const getProduct = async queries => {
	const { page = 0, limit = LIMIT_PRODUCTS } = queries;
	const query = addQueriesFind(queries);
	return await getPaginatedModel(Product, {
		query,
		limit,
		page,
		populate: { path: "categories", model: Category, select: "-products" }
	});
};

const addQueriesFind = queries => {
	const { name, description, price } = queries;
	const queryFind = {};
	if (name) queryFind.name = new RegExp(name, "i");
	if (description) queryFind.description = new RegExp(description, "i");
	if (price) queryFind.price = price;
	return queryFind;
};

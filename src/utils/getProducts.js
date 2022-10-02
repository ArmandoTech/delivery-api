import { LIMIT_PRODUCTS } from "../constants/limits.js";
import { Product } from "../models/Product.js";

export const getProduct = async queries => {
	const { page = 0, limit = LIMIT_PRODUCTS } = queries;
	const count = await Product.countDocuments();
	const totalPages = Math.ceil(count / limit);
	const search = addQueriesFind(queries);

	const products = await Product.find(search)
		.limit(limit)
		.skip(page * limit)
		.exec();

	return { products, count, totalPages, currentPage: page };
};

const addQueriesFind = queries => {
	const { name, description, price } = queries;
	const queryFind = {};
	if (name) queryFind.name = new RegExp(name, "i");
	if (description) queryFind.description = new RegExp(description, "i");
	if (price) queryFind.price = price;
	return queryFind;
};

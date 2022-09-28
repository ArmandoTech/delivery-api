import { LIMIT_PRODUCTS } from "../constants/limits.js";
import { Product } from "../models/Product.js";

export const getProduct = async queries => {
	const { page = 0, limit = LIMIT_PRODUCTS } = queries;
	const count = await Product.countDocuments();
	const totalPages = Math.ceil(count / limit);
	const search = addQueriesFind(queries);

	if (search.title) {
		const regexTitle = Product.findOne({
			title: { $regex: search.title, $options: "i" }
		});
		return regexTitle;
	}
	if (search.description) {
		const regexDescription = Product.findOne({
			description: { $regex: search.description, $options: "i" }
		});
		return regexDescription;
	}
	const products = await Product.find(search)
		.limit(limit)
		.skip(page * limit)
		.exec();

	return { products, count, totalPages, currentPage: page };
};

const addQueriesFind = queries => {
	const { title, description, price } = queries;
	const queryFind = {};
	if (title) queryFind.title = title;
	if (description) queryFind.description = description;
	if (price) queryFind.price = price;
	return queryFind;
};

import { Types } from "mongoose";
import { CustomError } from "../../classes/CustomError.js";
import { Category } from "../../models/Category.js";
import { Product } from "../../models/Product.js";
import { getPaginatedModel } from "../common/getPaginatedModel.js";

export async function getOneCategory({ id }) {
	const query = { _id: Types.ObjectId(id) };
	const populate = {
		path: "products",
		model: Product,
		select: "_id name price"
	};
	const select = "_id display img";
	const paginatedCategories = await getPaginatedModel(Category, {
		collection: "categories",
		query,
		select,
		populate
	});

	if (paginatedCategories.countDocuments < 1)
		throw new CustomError({ status: 204, message: "" });

	return paginatedCategories;
}

import { CategoryModel } from "../models/Category.js";
import { Product } from "../models/Product.js";

export const addCategoriesToProducts = async (product, categoryIds) => {
	const trueIds = new Set([]);
	try {
		for (let i = 0; i < categoryIds.length; i++) {
			const id = categoryIds[i];
			const category = await CategoryModel.findById(id).exec();
			if (!category)
				throw TypeError("There is no categories matching for that Id");
			trueIds.add(category._id);
		}
	} catch (error) {
		await Product.deleteOne({ _id: product._id }).exec();
	}
	product.categories = trueIds;
	product.save();
};

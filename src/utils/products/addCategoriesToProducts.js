import { CategoryModel } from "../../models/Category.js";

export const addCategoriesToProducts = async (product, categoryIds) => {
	const trueIds = new Set();

	for (let i = 0; i < categoryIds.length; i++) {
		const categoryId = categoryIds[i];
		const category = await CategoryModel.findById(categoryId).exec();
		if (!category)
			throw TypeError("There is no categories matching for that Id");
		trueIds.add(category._id.toString());
	}

	product.categories = Array.from(trueIds);
	await product.save();
};

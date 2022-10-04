import { Category } from "../../models/Category.js";

export const addProductsToCategories = async (categoryIds, productId) => {
	for (let i = 0; i < categoryIds.length; i++) {
		const categoryId = categoryIds[i];
		const category = await Category.findById(categoryId).exec();
		if (!category)
			throw TypeError("There is no categories matching for that Id");
		category.products.push(productId);
		await category.save();
	}
};

import { CategoriesModel } from "../../models/Category.js";

export const deleteCategory = categoryName => {
	const result = {
		status: "success",
		message: "Category was successfully deleted."
	};

	CategoriesModel.deleteOne({ name: categoryName });

	return result;
};

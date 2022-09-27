import { CategoryModel } from "../../models/Category.js";

export const deleteCategory = async categoryId => {
	const { deletedCount } = await CategoryModel.deleteOne({ _id: categoryId });
	const result = {
		status: deletedCount ? "success" : "failure",
		msg: deletedCount ? "Category was successfully deleted." : "Category doesn't exist."
	};

	return result;
};

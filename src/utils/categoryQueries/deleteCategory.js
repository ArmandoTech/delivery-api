import { CustomError } from "../../classes/CustomError.js";
import { Category } from "../../models/Category.js";

export const deleteCategory = async categoryId => {
	const { deletedCount } = await Category.deleteOne({ _id: categoryId });
	if (!deletedCount)
		throw new CustomError({ status: 400, message: "Category doesn't exist." });
};

import { CategoryModel } from "../../models/Category.js";

export const getAllCategories = () => {
	return CategoryModel.find().exec();
};

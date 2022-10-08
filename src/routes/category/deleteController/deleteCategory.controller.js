import { deleteCategory } from "../../../utils/categoryQueries/deleteCategory.js";

export const deleteCategoryController = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteCategory(id);
		res.status(200).json({ msg: "Category successfully deleted." });
	} catch (error) {
		next(error);
	}
};

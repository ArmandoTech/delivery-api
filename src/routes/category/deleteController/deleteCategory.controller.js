import { deleteCategory } from "../../../utils/categoryQueries/deleteCategory.js";

export const deleteCategoryController = async (req, res, next) => {
	try {
		const { id } = req.body;
		await deleteCategory(id);

		res.status(200).json({ msg: "👋" });
	} catch (error) {
		next(error);
	}
};

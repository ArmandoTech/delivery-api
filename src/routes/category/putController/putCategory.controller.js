import { updateCategory } from "../../../utils/categoryQueries/updateCategory.js";

export const putCategoryController = async (req, res, next) => {
	try {
		const { id } = req.params;
		updateCategory(id, req.body);
		res.status(200).json({ msg: "👋" });
	} catch (error) {
		next(error);
	}
};

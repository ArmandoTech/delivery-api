import { updateCategory } from "../../../utils/categoryQueries/updateCategory.js";

export const putCategoryController = async (req, res, next) => {
	try {
		const { id } = req.params;
		console.log("Esto es el body", req.body);
		updateCategory(id, req.body);
		res.status(200).json({ msg: "👋" });
	} catch (error) {
		next(error);
	}
};

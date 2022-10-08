import { updateCategory } from "../../../utils/categoryQueries/updateCategory.js";

export const putCategoryController = async (req, res, next) => {
	try {
		const { id } = req.params;
		await updateCategory(id, req.body);
		res.status(200).json({ msg: "Actualización realizada correctamente" });
	} catch (error) {
		next(error);
	}
};

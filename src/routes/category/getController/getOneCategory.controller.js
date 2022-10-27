import { getOneCategory } from "../../../utils/categoryQueries/getOneCategory.js";

export const getOneCategoryController = async (req, res, next) => {
	try {
		const paginatedCategories = await getOneCategory(req.params);
		res.status(200).json(paginatedCategories);
	} catch (err) {
		next(err);
	}
};

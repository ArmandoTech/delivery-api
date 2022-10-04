import { getCategories } from "../../../utils/categoryQueries/getCategories.js";

export const getCategoriesController = async (req, res, next) => {
	try {
		const paginatedCategories = await getCategories(req.query);

		res.status(200).json({
			...paginatedCategories
		});
	} catch (err) {
		next(err);
	}
};

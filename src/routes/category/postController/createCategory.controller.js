import { SUCCESS } from "../../../constants/msgs.js";
import { getCategories } from "../../../utils/categoryQueries/getCategories.js";

export const createCategoryController = async (req, res, next) => {
	try {
		const paginatedCategories = await getCategories(req.query);

		res.status(200).json({
			msg: SUCCESS,
			...paginatedCategories
		});
	} catch (err) {
		next(err);
	}
};

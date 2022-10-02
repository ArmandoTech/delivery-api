import { SUCCESS } from "../../../constants/msgs.js";
import { getCategories } from "../../../utils/categoryQueries/getCategories.js";

export const getCategoriesController = async (req, res, next) => {
	try {
		const paginatedCategories = await getCategories(req.query);
		const htmlStatus = paginatedCategories.count > 0 ? 200 : 204;

		res
			.status(htmlStatus)
			.json({
				"status": "success",
				"msg": SUCCESS,
				...paginatedCategories
			});
	} catch (err) {
		next(err);
	}
};

import { CATEGORY_CREATION_SUCCESS } from "../../../constants/msgs.js";
import { createCategory } from "../../../utils/categoryQueries/createCategory.js";

export const createCategoryController = async (req, res, next) => {
	try {
		const { display } = req.body;
		await createCategory(req.body);

		res.status(200).json({
			msg: `${CATEGORY_CREATION_SUCCESS}: ${display}.`
		});
	} catch (err) {
		next(err);
	}
};

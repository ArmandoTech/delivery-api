import {
	ALREADY_EXISTS,
	CATEGORY_CREATION_SUCCESS
} from "../../../constants/msgs.js";
import { createCategory } from "../../../utils/categoryQueries/createCategory.js";

export const createCategoryController = async (req, res, next) => {
	try {
		const { display } = req.body;

		if (display) {
			const [category, created] = await createCategory(req.body);
			const queryStatus = created ? "success" : "failure";
			const msg = created
				? `${CATEGORY_CREATION_SUCCESS}: '${display}'.`
				: `${ALREADY_EXISTS}: '${display}'.`;
			const htmlStatus = created ? 201 : 400;
			await category.save();
			res.status(htmlStatus).json({ queryStatus, msg });
		} else {
			res.status(400).json({
				queryStatus: "failure",
				msg: "It was not possible to process your request."
			});
		}
	} catch (error) {
		next(error);
	}
};

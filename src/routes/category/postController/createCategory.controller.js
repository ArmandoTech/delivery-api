import { createCategory } from "../../../utils/categoryQueries/createCategory.js";
import { CATEGORY_CREATION_SUCCESS, ALREADY_EXISTS } from "../../../constants/msgs.js";

export const createCategoryController = async (req, res, next) => {
	try {

		const { display, img } = req.body;

		if (display) {
			const [, created] = await createCategory(display, img || "");
			const queryStatus = created ? "success" : "failure";
			const msg = created ? `${CATEGORY_CREATION_SUCCESS}: '${display}'.` : `${ALREADY_EXISTS}: '${display}'.`;
			const htmlStatus = created ? 201 : 400;

			res
				.status(htmlStatus)
				.json({ queryStatus, msg });

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

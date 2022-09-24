import { createCategory } from "../../../utils/categoryQueries/createCategory.js";

export const createCategoryController = async (req, res, next) => {
	try {
		const { category } = req.params;
		if (category) {
			const result = createCategory(category);
			res.status(200).send(result);
		} else {
			res.status(400).send({
				status: "Failure",
				message: "It was not possible to process your request."
			});
		}
	} catch (error) {
		next(error);
	}
};

import { getCategory } from "../../../utils/categoryQueries/getCategory.js";

export const getOneCategoryController = async (req, res, next) => {
	const { category } = req.params;
	getCategory(category)
		.then(result => {
			if (result) res.status(200).send(result);
			else
				res
					.status(404)
					.send({
						status: "failure",
						message: `Category '${category}' not found`
					});
		})
		.catch(err => {
			next(err);
		});
};

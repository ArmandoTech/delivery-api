import { CustomError } from "../../classes/CustomError.js";

export const getPaginatedModel = async (
	Model,
	{ query = {}, limit = 10, page, populate, collection = "undefined", select }
) => {
	if (!Model)
		throw new CustomError({ status: 400, message: "Model is required." });
	if (page && page <= 0)
		throw new CustomError({ status: 400, message: "Page incorrect." });

	const countDocuments = await Model.countDocuments(query);
	if (countDocuments === 0) return {};
	if (Number(limit) < 0) limit = Math.abs(limit);
	if (Number(limit) === 0) limit = countDocuments;

	const totalPages = Math.ceil(countDocuments / limit);

	if (page > totalPages)
		throw new CustomError({ status: 400, message: "Page incorrect." });

	const realPage = page ? page - 1 : 0;
	const currentPage = realPage * limit;
	const queryBuilder = Model.find(query);
	if (populate) queryBuilder.populate(populate);
	if (select) queryBuilder.select(select);

	const documents = await queryBuilder.limit(limit).skip(currentPage).exec();

	return {
		collection,
		totalPages,
		countDocuments,
		currentPage: realPage + 1,
		documents
	};
};

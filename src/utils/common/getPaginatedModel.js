import { CustomError } from "../../classes/CustomError.js";

export const getPaginatedModel = async (
	Model,
	{
		query = {},
		limit = 10,
		page = 1,
		populate,
		collection = "undefained",
		select
	}
) => {
	if (!Model)
		throw new CustomError({ status: 400, message: "Model is required." });
	if (page <= 0)
		throw new CustomError({ status: 400, message: "Page incorrect." });

	const countDocuments = await Model.countDocuments(query);
	const totalPages = Math.ceil(countDocuments / limit);

	if (page > totalPages)
		throw new CustomError({ status: 400, message: "Page incorrect." });

	const realPage = page - 1;
	const currentPage = realPage * limit;
	const queryBuilder = Model.find(query);
	if (populate) queryBuilder.populate(populate);
	if (select) queryBuilder.select(select);

	const documents = await queryBuilder.limit(limit).skip(currentPage).exec();

	return {
		collection,
		totalPages,
		countDocuments,
		currentPage: Number(page),
		documents
	};
};

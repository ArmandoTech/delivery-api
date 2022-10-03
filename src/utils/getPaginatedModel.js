export const getPaginatedModel = async (
	Model,
	{ query = {}, limit = 10, page = 0, populate }
) => {
	if (!Model) throw TypeError("Model is required.");

	const currentPage = page * limit;
	const countDocuments = await Model.countDocuments(query);

	const queryBuilder = Model.find(query);
	if (populate) queryBuilder.populate(populate);
	if (query.select) queryBuilder.select(query.select);

	const documents = await queryBuilder.limit(limit).skip(currentPage).exec();

	return {
		totalPage: Math.ceil(countDocuments / limit),
		countDocuments,
		currentPage,
		documents
	};
};

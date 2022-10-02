export const getPaginatedModel = async (
	Model,
	{ query = {}, limit = 10, page = 0, populate }
) => {
	if (!Model) throw TypeError("Model is required.");

	const currentPage = page * limit;
	const count = await Model.countDocuments(query);

	const queryBuilder = Model.find(query);

	if (populate) queryBuilder.populate(populate);

	const documents = await queryBuilder.limit(limit).skip(currentPage).exec();

	return {
		count,
		currentPage,
		totalPage: Math.ceil(count / limit),
		documents
	};
};

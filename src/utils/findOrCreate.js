export const findOrCreate = async (Model, search, data) => {
	const formatSearch = [];
	for (const [key, value] of Object.entries(search)) {
		formatSearch.push({ [key]: value });
	}
	const document = await Model.findOne({ $or: formatSearch }).exec();
	if (document) return [document, false];
	else {
		const newDocument = new Model({ ...search, ...data });
		return [newDocument, true];
	}
};

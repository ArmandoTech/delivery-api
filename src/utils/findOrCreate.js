export const findOrCreate = async (Model, search, data) => {
	const newSearch = [];
	for (const [key, value] of Object.entries(search)) {
		newSearch.push({ [key]: value });
	}
	const document = await Model.findOne({ $or: newSearch }).exec();
	if (document) return [document, false];
	else {
		const newDocument = new Model({ ...search, ...data });
		const document = await newDocument.save();
		return [document, true];
	}
};

export const getPaginatedModel = async (Model, { query = {}, limit = 10, page = 0 }) => {
    if (!Model) throw TypeError("Model is required.");

    const currentPage = page * limit;
    const count = await Model.countDocuments(query);
    const documents = await Model
        .find(query)
        .limit(limit)
        .skip(currentPage)
        .exec();

    return {
        count,
        currentPage,
        totalPage: Math.ceil(count / limit),
        documents,
    }
}

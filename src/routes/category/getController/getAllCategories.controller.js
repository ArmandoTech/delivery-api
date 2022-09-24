import { getAllCategories } from "../../../utils/categoryQueries/getAllCategories.js";


export const getAllCategoriesController = async (req, res, next) => {
    getAllCategories()
        .then((result) => {
            if (result)
                res.status(200).send(result);
            else
                res.status(404).send({ status: "failure", message: "None category was found" });
        }).catch((err) => {
            next(err);
        });
};
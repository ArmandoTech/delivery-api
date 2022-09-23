import { resetDB } from "../../../utils/queries/resetBD.js";

export const resetController = async (req, res, next) => {
    try {
        resetDB();
    } catch (error) {
        next(error);
    }
};
import mongoose from "mongoose";
import { CategoriesModel } from "../../models/categories.js";

export const resetDB = () => {
    mongoose.connection.db.listCollections().forEach((collection) => {
        mongoose.connection.db.dropCollection(collection.name);
    });

    CategoriesModel.create();
}
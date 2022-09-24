import { Router } from "express";
import { getAllCategoriesController } from "./getController/getAllCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { getOneCategoryController } from "./getController/getOneCategory.controller.js";

export const categories = Router();

categories.route("/").get(getAllCategoriesController);
categories.route("/:category").get(getOneCategoryController);

categories.route("/:category").post(createCategoryController);
categories.route("/").post(createCategoryController);
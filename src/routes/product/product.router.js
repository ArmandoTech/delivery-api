import { Router } from "express";
import { validateDtoCreateProducts } from "../../middlewares/validateDtoCreateProducts.js";
import { validateDtoGetOneProduct } from "../../middlewares/validateDtoGetOneProduct.js";
import { validateDtoGetProducts } from "../../middlewares/validateDtoGetProducts.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { validationAdmin } from "../../middlewares/validationAdmin.js";
import { deleteProductController } from "./deleteController/deleteProduct.controller.js";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { getOneProductController } from "./getController/getOneProduct.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
import { updateProductController } from "./updateController/updateProduct.controller.js";

export const products = Router();

products.route("/").get(validateDtoGetProducts, getAllProductsController);
products.route("/:id").get(validateDtoGetOneProduct, getOneProductController);
products
	.route("/")
	.post(
		validateToken,
		validationAdmin,
		validateDtoCreateProducts,
		createProductController
	);
products
	.route("/:id")
	.delete(validateDtoGetOneProduct, deleteProductController);
products.route("/:id").patch(updateProductController);

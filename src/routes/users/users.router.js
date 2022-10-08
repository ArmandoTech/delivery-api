import { Router } from "express";
import { validateDtoGetOneUser } from "../../middlewares/validateDtoGetOneUser.js";
import { validateDtoGetUsers } from "../../middlewares/validateDtoGetUsers.js";
import { validateDtoUpdateUser } from "../../middlewares/validateDtoUpdateUser.js";
import { validateDtoUpdateUserByAdmin } from "../../middlewares/validateDtoUpdateUserByAdmin.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { validationAdmin } from "../../middlewares/validationAdmin.js";
import { deleteUserController } from "./deleteController/deleteUser.controller.js";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";
import { getOneUserController } from "./getController/getOneUser.controller.js";
import { updateUserController } from "./updateController/updateUser.controller.js";
import { updateUserByAdminController } from "./updateController/updateUserByAdmin.controller.js";

export const users = Router();

users.route("/").get(validateDtoGetUsers, getAllUsersController);
users.route("/:id").get(validateDtoGetOneUser, getOneUserController);
users.route("/:id").delete(validateDtoGetOneUser, deleteUserController);
users.route("/:id").patch(validateDtoUpdateUser, updateUserController);
users
	.route("/admin/:id")
	.patch(
		validateToken,
		validationAdmin,
		validateDtoUpdateUserByAdmin,
		updateUserByAdminController
	);

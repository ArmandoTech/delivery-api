import { Router } from "express";
import { validateDtoGetOneUser } from "../../middlewares/validateDtoGetOneUser.js";
import { validateDtoGetUsers } from "../../middlewares/validateDtoGetUsers.js";
import { validateDtoUpdateUser } from "../../middlewares/validateDtoUpdateUser.js";
import { deleteUserController } from "./deleteController/deleteUser.controller.js";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";
import { getOneUserController } from "./getController/getOneUser.controller.js";
import { updateUserController } from "./updateController/updateUser.controller.js";

export const users = Router();

users.route("/").get(validateDtoGetUsers, getAllUsersController);
users.route("/:id").get(validateDtoGetOneUser, getOneUserController);
users.route("/:id").delete(validateDtoGetOneUser, deleteUserController);
users.route("/:id").patch(validateDtoUpdateUser, updateUserController);

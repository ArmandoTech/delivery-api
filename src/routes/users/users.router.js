import { Router } from "express";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";
<<<<<<< HEAD

export const users = Router();

users.route("/").get(getAllUsersController);
=======
import { getOneUserController } from "./getController/getOneUser.controller.js";
import { updateUserController } from "./updateController/updateUser.controller.js";

export const users = Router();

users.route("/").get(validateDtoGetUsers, getAllUsersController);
users.route("/:id").get(validateDtoGetOneUser, getOneUserController);
users.route("/:id").delete(validateDtoGetOneUser, deleteUserController);
users.route("/:id").patch(validateDtoUpdateUser, updateUserController);
>>>>>>> development

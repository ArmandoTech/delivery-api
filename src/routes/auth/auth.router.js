import { Router } from "express";
import { validateDtoLogin } from "../../middlewares/validateDtoLogin.js";
import { validateDtoRegister } from "../../middlewares/validateDtoRegister.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { verifyRegisterController } from "./getController/verifyRegister.controller.js";
import { loginController } from "./postController/login.controller.js";
import { registerController } from "./postController/register.controller.js";
import { verifyTokenController } from "./postController/verifyToken.controller.js";

export const auth = Router();

auth.route("/register").post(validateDtoRegister, registerController);
auth.route("/verify-register").get(verifyRegisterController);
auth.route("/login").post(validateDtoLogin, loginController);
auth.route("/verify-token").post(validateToken, verifyTokenController);

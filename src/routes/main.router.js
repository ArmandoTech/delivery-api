import { Router } from "express";
import { auth } from "./auth/auth.router.js";
import { users } from "./users/users.router.js";

export const router = Router();

router.use("/users", users);
router.use("/auth", auth);

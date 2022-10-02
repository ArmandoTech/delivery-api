import { Router } from "express";
import { auth } from "./auth/auth.router.js";
import { categories } from "./category/category.router.js";
import { products } from "./product/product.router.js";
import { users } from "./users/users.router.js";

export const router = Router();

router.use("/users", users);
router.use("/categories", categories);
router.use("/auth", auth);
router.use("/products", products);

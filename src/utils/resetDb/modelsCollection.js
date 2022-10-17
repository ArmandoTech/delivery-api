import { Category } from "../../models/Category.js";
import { Order } from "../../models/Order.js";
import { Detail } from "../../models/OrderDetail.js";
import { Product } from "../../models/Product.js";
import { User } from "../../models/User.js";

export const modelsCollection = [Category, User, Product, Order, Detail];

import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	img: { type: String, required: true }
});

export const Product = model("Product", ProductSchema);

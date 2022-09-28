import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
	active: { type: Boolean, default: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	images: [{ type: Schema.Types.ObjectId, ref: "Image" }]
});

export const Product = model("Product", ProductSchema);

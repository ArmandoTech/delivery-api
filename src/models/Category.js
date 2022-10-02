import { model, Schema } from "mongoose";

const Category = new Schema({
	normalizedDisplay: {
		type: String,
		required: true,
		unique: true
	},
	display: {
		type: String,
		required: true,
		unique: true
	},
	img: {
		type: String
	},
	products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

Category.set("versionKey", false);

export const CategoryModel = model("Category", Category);

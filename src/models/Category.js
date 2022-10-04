import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
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

CategorySchema.set("versionKey", false);

export const Category = model("Category", CategorySchema);

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
Category.set("toJSON", {
	transform: function (_, ret) {
		ret.imgRoute = process.env.CATEGORY_STATIC_ROUTE + ret.imgFilename;
	}
});

export const CategoryModel = model("Category", Category);

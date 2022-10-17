import { CustomError } from "../../classes/CustomError.js";
import mongoose from "mongoose";
import { Order } from "../../models/Order.js";
// import { findOrCreate } from "../common/findOrCreate.js";
// import assert from "node:assert/strict";
import { Detail } from "../../models/OrderDetail.js";

export const createOrder = async body => {
	const { user, address, state, latitude, longitude, details } = body;

	const date = Date.now;

	await Order.createCollection();
	const session = await mongoose.startSession();

	const sessionResult = await session.withTransaction(async () => {
		const detailsDocuments = await Detail.create(details, { session });

		const detailsList = detailsDocuments.map(el => el._id);

		await Order.create(
			[
				{
					status: "ordered",
					latitude,
					longitude,
					user,
					createdAt: { type: Date, default: date },
					updatedAt: { type: Date, default: date },
					address,
					state,
					details: detailsList
				}
			],
			{ session }
		);
	});

	if (sessionResult) session.endSession();
	else
		throw new CustomError({
			status: 400,
			msg: "Algo ha salido mal al crear el pedido"
		});
};

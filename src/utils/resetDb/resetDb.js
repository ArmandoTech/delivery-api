import "dotenv/config";
import { connDb } from "../../connDb.js";
import { fillAllDb } from "../fillDb/fillAllDb.js";
import { modelsCollection } from "./modelsCollection.js";

const resetDb = async () => {
	for (let i = 0; i < modelsCollection.length; i++) {
		const variable = await modelsCollection[i].deleteMany().exec();
		console.log({
			modelName: modelsCollection[i].modelName,
			deletedCount: variable.deletedCount
		});
	}
};

connDb()
	.then(() => resetDb())
	.then(() => fillAllDb())
	.then(() => {
		console.log("DB reseted");
		process.exit();
	});

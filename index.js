import "dotenv/config";
import { connDb } from "./src/connDb.js";
import { PORT } from "./src/env/server.js";
import { server } from "./src/server.js";

connDb()
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server running on port: ${PORT} 😎`); // eslint-disable-line no-console
		});
	})
	.catch(err => console.log(err));

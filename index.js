import "dotenv/config";
import { transporter } from "./src/config/nodemailer.js";
import { connDb } from "./src/connDb.js";
import { PORT } from "./src/env/server.js";
import { server } from "./src/server.js";
import { fillAllDb } from "./src/utils/fillDb/fillAllDb.js";

connDb()
	.then(() => transporter.verify())
	.then(() => fillAllDb())
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server running on port: ${PORT} 😎`); // eslint-disable-line no-console
		});
	})
	.catch(err => console.log(err));

# findOrCreate()

- Return a promise
- When solving it sends an array of 2 positions:
  - **first position:** the document found or created.
  - **second position:** boolean indicating if the document was found or created
- Receive 3 params:
  - **Model:** indicates the model on which it will search or create instead.
  - **search:** an object that indicates the params on which the search will be done.
  - **data:** the data or fields of the document that will be embedded in case it is not found. The search params sent in search are taken into account, so it is not necessary to repeat fields if they were typed in search

```
  import { User } from "../models/User.js";
  import { encryptPassword } from "./encryptPassword.js";
  import { findOrCreate } from "./findOrCreate.js";

  export const createUser = async ({ username, email, password, name }) => {
    const [ user, created ] = await findOrCreate(
      User,
      { email, username },
      {
        name,
        password: await encryptPassword(password)
      }
    );
    if(!created) console.log( `No fue creado el documento: ${user}` )
    if(created) console.log( `Si fue creado el documento: ${user}` )
  };

```

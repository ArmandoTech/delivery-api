# findOrCreate()

- Retorna una promesa
- Al resolver envia un array de 2 posiciones:
  - **primera posición:** el document encontrado o creado.
  - **segunda posición:** boolean indicando si fue encontrado o creado dicho documento
- Recibe 3 params:
  - **Model:** indica el modelo sobre el cual buscará o creará en su defecto.
  - **search:** un objeto que indica los params sobre los cuales hará la busqueda.
  - **data:** los datos o campos del documento que incrustará en caso de no ser encontrado. Se toman en cuenta los params de busqueda enviados en search, por lo que no es necesario repetir campos si fueron digitados en search

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

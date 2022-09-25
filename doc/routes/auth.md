# Endpoints Auth

## http://localhost:3000/auth/register (POST)

Permite registrar un usuario, se enviará un link al correo el cual debe ser cliqueado para verificar el registro, el link tiene incrustado un token valido por 1h. Envie la DTO por body.

```
  {
    "email":"testedarcode@gmail.com",
    "password":"Amo programar!",
    "username":"edarcode",
    "name":"edwin ortiz"
  }
```

Responde con status 201 si todo sale bien + un json:

```
{
  "msg": "Verify your account by clicking the link sent to your email"
}
```

## http://localhost:3000/auth/login (POST)

Permite al usuario obtener un token y algunos datos del usuario asociado al mismo. El usuario debe tener una cuenta varificada. Puede hacer login con email o username. Envie la DTO por body

```
  {
    "email":"testedarcode@gmail.com",
    "password":"Amo programar!"
  }
```

ó

```
  {
    "username":"edarcode",
    "password":"Amo programar!"
  }
```

Responde con status 201 si todo sale bien + un json:

```
  {
    "username": "edarcode",
    "email": "testedarcode@gmail.com",
    "role": "cliente",
    "name": "edwin ortiz",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzMwNmE2NzlhZmYyYjAzOWQ0NDI1MGEiLCJpYXQiOjE2NjQxMTgzMjAsImV4cCI6MTY2NDIwNDcyMH0.q_58l0Sq6e7yrERQaXNtSy7ML9Wc_ClkIz2x0s-gKXw"
  }
```

El token es valido por 24h.

## http://localhost:3000/auth/verify-token (POST)

Permite validar si un token es valido. Debe enviar por headers el token a validar con la key "token".

Responde con status 200 si todo sale bien + un json:

```
  {
    "username": "edarcode",
    "email": "testedarcode@gmail.com",
    "role": "cliente",
    "name": "edwin ortiz"
  }
```

## http://localhost:3000/auth/verify-register (GET)

Valida si se ha cliqueado en el link enviado al correo de un usuario al registrarse. El token está incrustado como query "token".

Responde con status 200 si todo sale bien + un json:

```
  {
    "msg": "Successful registration"
  }
```

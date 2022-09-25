# Endpoints Auth

## http://localhost:3000/auth/register (POST)

It allows registering a user, a link will be sent to the email which must be clicked to verify the registration, the link has a token valid for 1h embedded. Send the DTO by body.

```
  {
    "email":"testedarcode@gmail.com",
    "password":"Amo programar!",
    "username":"edarcode",
    "name":"edwin ortiz"
  }
```

Reply with status 201 if all goes well + a json:

```
{
  "msg": "Verify your account by clicking the link sent to your email"
}
```

## http://localhost:3000/auth/login (POST)

Allows the user to obtain a token and some user data associated with it. The user must have a varified account. You can login with email or username. Send the DTO by body

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

Reply with status 201 if all goes well + a json:

```
  {
    "username": "edarcode",
    "email": "testedarcode@gmail.com",
    "role": "cliente",
    "name": "edwin ortiz",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzMwNmE2NzlhZmYyYjAzOWQ0NDI1MGEiLCJpYXQiOjE2NjQxMTgzMjAsImV4cCI6MTY2NDIwNDcyMH0.q_58l0Sq6e7yrERQaXNtSy7ML9Wc_ClkIz2x0s-gKXw"
  }
```

The token is valid for 24h.

## http://localhost:3000/auth/verify-token (POST)

Allows to validate if a token is valid. You must send the token to be validated with the key "token" through headers.

Reply with status 200 if all goes well + a json:

```
  {
    "username": "edarcode",
    "email": "testedarcode@gmail.com",
    "role": "cliente",
    "name": "edwin ortiz"
  }
```

## http://localhost:3000/auth/verify-register (GET)

Validates if the link sent to a user's email when registering has been clicked. The token is embedded as a "token" query.

Reply with status 200 if all goes well + a json:

```
  {
    "msg": "Successful registration"
  }
```

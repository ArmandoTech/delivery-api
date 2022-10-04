# Project: auth

## End-point: register

### Method: POST

> ```
> https://delivery-production-6b8e.up.railway.app/auth/register
> ```

### Body (**raw**)

```json
{
	"email": "testedarcode@gmail.com",
	"password": "Amo programar!",
	"username": "edarcode",
	"name": "edwin ortiz"
}
```

## End-point: login

### Method: POST

> ```
> https://delivery-production-6b8e.up.railway.app/auth/login
> ```

### Body (**raw**)

```json
{
	"username": "edarcodes",
	"password": "Amo programar!"
}
```

## End-point: verify token

### Method: POST

> ```
> https://delivery-production-6b8e.up.railway.app/auth/verify-token
> ```

### Headers

| Content-Type | Value                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiODIyNGI4MTFiNDYyMGM0YzM5MDkiLCJpYXQiOjE2NjQ4NDQ0MzgsImV4cCI6MTY2NDkzMDgzOH0.TciJI84bBwDQKzazOIu-FFo_OjvODIsjTQ5SvwXCCIY |

---

# Endpoints User

## http://localhost:3000/users (GET)

Only user with role "admin" can access to this information.
It returns all the users from the database. Queries can be sent to filter users by criteria. DTO is sent by query.

### Queries accepted

- active: true or false
- role: client, admin, motorized
- username: does not have to be the exact username, it will
  find it using regular expressions.
- name: as username, it also uses regular expressions.
- email

Replies with a 200 status if everything is good. It returns all the matches, count, totalPages and currentPage.

- count: number of documents on the database.
- totalPages: number of pages which takes to show all documents according due to pagination.
- currentPage: page showed.

## http://localhost:3000/users/:id (GET)

Only user with role "admin" can access to this information.
It returns only one user which needs to be find by the exact id.

## http://localhost:3000/users/:id (DELETE)

It changes the "active" status from database to "false", that way the user is not deleted from the database, but it will no longer be used by the user.
It returns a JSON with a succesfull msg if deleted.

```
{
    "msg": "User deleted correctly"
}
```

## http://localhost:3000/users/:id (PATCH)

Allows to change user information. Changes must be sent by body. It returns a JSON with a succesfull msg if updated.

```
{
    "msg": "User updated correctly"
}
```

## http://localhost:3000/users/admin/:id (PATCH)

Only user with role admin can update information from other user such as:

- username
- role
- verify

Thus if an user writes an username which does not follow the conduct code of the enterprise, admin will be able
to change it. If admin needs another new admin he can also change it. If an user cannot be verifid, admin can change
it manually.

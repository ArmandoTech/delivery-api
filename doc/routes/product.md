# Endpoints User

## http://localhost:3000/products (GET)

It returns all the products from the database. Queries can be sent to filter products by criteria. DTO is sent by query.

### Queries accepted

- name
- description
- price

Replies with a 200 status if everything is good. It returns all the matches, count, totalPages and currentPage.

- count: number of documents on the database.
- totalPages: number of pages which takes to show all documents according due to pagination.
- currentPage: page showed.

## http://localhost:3000/users/:id (GET)

It returns only one product which needs to be find by the exact id.

## http://localhost:3000/products/:id (DELETE)

Only user with role "admin" can delete a product.

It returns a JSON with a succesfull msg if deleted.

```
{
    "msg": "Producto eliminado correctamente"
}
```

## http://localhost:3000/products/:id (PATCH)

Only user with role "admin" can update a product.

Allows to change product information. Changes must be sent by body. It returns a JSON with a succesfull msg if updated.

```
{
    "msg": "Producto actualizado correctamente"
}
```

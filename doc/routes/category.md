# Project: Imported from OpenAPI 3.0

# 📁 Collection: categories

## End-point: FindCategory

### Method: GET

> ```
> https://delivery-production-6b8e.up.railway.app/categories/?name=Pastas&page=1&limit=10
> ```

### Query Params

| Param | content-type | comment                         |
| ----- | ------------ | ------------------------------- |
| name  | String       | (optional) Name of the category |
| page  | Number       | (optional) Mínimum value 1      |
| limit | Number       | (optional) Mínimum value 1      |

### Response: 200

```json
{
  "collection": "categories",
  "totalPages": 1,
  "countDocuments": 1,
  "currentPage": 1,
  "documents": [
    {
      "_id": "633b6e205356af76b31e9226",
      "display": "Pastas",
      "img": "www.perrito.com",
      "products": [
        {
          "_id": "633b6e225356af76b31e923e",
          "name": "Pastas"
        }
      ]
    }
  ]
}
```

## End-point: CreateCategory

### Method: POST

> ```
> https://delivery-production-6b8e.up.railway.app/categories
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "img": "www.imgurl.com",
  "display": "Ensaladas"
}
```

## End-point: DeleteCategory

### Method: DELETE

> ```
> https://delivery-production-6b8e.up.railway.app/categories/:id
> ```

## End-point: UpdateCategory

### Method: PUT

> ```
> https://delivery-production-6b8e.up.railway.app/categories/:id
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "display": "Bebidas Alcohólicas",
  "img": "www.imgurl.com"
}
```

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)

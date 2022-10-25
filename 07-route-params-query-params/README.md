# Dynamic Routes and Advanced Models

## Objectives

- Passing Route Params
- Using Query Params
- Enhance our Models

## Adding Route Params

- Adding the route using `:` inside the `routes` file.
- E.g., inside `shop.js` in the routes folder.

```js
router.get("/products/:productId", shopController.getProduct);

// if you have this route, it will not be triggered because the params route above
// has the same url format. Instead, put this route above the params route.
// router.get("/products/delete", shopController.getProduct)
```

- Inside the controller folder, `shop.js`
- Use `req.params.productId` to retrieve the params.

```js
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect("/");
};
```

## GET specific item by id

- In `/models/product.js`, display the product by its unique id that was passed in route params.
```js
  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id)
      cb(product)
    })
  }
```



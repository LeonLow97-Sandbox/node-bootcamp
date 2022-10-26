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

## Query Params

- Passing data through query params.
- Syntax: `?key=value`

```js
<a href="/admin/edit-product/<%= product.id %>?edit=true" class="btn">
  Edit
</a>
```

- In the controller, receive the query params using `req.query.<key>`
- In `admin.js` controller, we receive `edit` as the query params and can use it to check if it is true or false.
```js
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit; // the extracted value is a string (so "true" instead of true)
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};
```

# Summary on Params

## Dynamic Routing

- [Official Routing Documentation](https://expressjs.com/en/guide/routing.html)
- Can pass dynamic path segments by adding a ":" to the Express router path.
- The name you add after ":" is the name by which you can extract the data on `req.params`
- Optional (query) parameters can also be passed `?param=value&b=2` and extracted using `req.query.myParam`

## More on Models

- A Cart model was added - it holds static methods only.
- You can interact between models (e.g., delete cart item if a product was deleted).
- Working with files for data storage is suboptimal for bigger amounts of data. Using a database is the solution for this.

## What's MVC?

- Separation of Concerns
  |Models|Views|Controllers|
  |:-:|:-:|:-:|
  |Database|Frontend|Backend|
  |Represent your data in your code|What the users sees|Connecting your Models and your Views|
  |Work with your data (e.g., save, fetch)|Decoupled from your application code|Contains the "in-between" logic, routes and is split across middleware functions|

- Currently, our logic is in the `routes`. It should be in the `controller` instead.

## Using Controllers

- In `product.js` (controller)

```js
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
```

- In `admin.js` (routes)

```js
router.post("/add-product", productsController.postAddProduct);
```

## Using Classes

- Introducing callbacks because JavaScript runs asynchronously.

```js
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // 'this' refers to the object created based on the Class
  save() {
    // products.push(this);
    // passing the callback function to getProductsFromFile()
    // To ensure 'this' refers to the Class, use arrow function
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static methods are called directly on the class
  // without creating an instance/object of the class
  // add a "cb" parameter to fetchAll
  // once this "cb" callback is done, it will execute
  // "res.render" in product.js where we pass "products" in a callback function
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
```

- Calling static methods in the Class inside the Controller
- `res.render()` is the **callback function** here because this should be called once the file has been read.

```js
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
```

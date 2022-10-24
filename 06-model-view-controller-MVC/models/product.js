const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  // the callback function contains both return statements.
  // Since JavaScript runs asynchronously, it has not ran the callback yet.
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

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

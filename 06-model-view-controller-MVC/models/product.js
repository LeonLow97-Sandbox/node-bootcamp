const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // 'this' refers to the object created based on the Class
  save() {
    products.push(this);
  }

  // static methods are called directly on the class
  // without creating an instance/object of the class
  static fetchAll() {
    return products;
  }
};

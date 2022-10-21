const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // render() method uses the default templating engine defined in app.js
  // already defined in app.js, so this will access views folder and look for .pug file
  const products = adminData.products;
  // pass to shop.pug template with an object
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;

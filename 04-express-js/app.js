const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next(); // Allows the request to continue to the next middleware in line.
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Add Product Page</h1>");
  // next() // don't want to add next() here because it will send another response (error multiple headers)
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello From Express!</h1>");
});

app.listen(3000);

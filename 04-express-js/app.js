const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Parses Request Body (use this middleware)
app.use(bodyParser.urlencoded({ extended: false })); // will call next() in the end

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 error page
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);

// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next(); // Allows the request to continue to the next middleware in line.
// });

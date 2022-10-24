const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const users = [];

// app.set("view engine", "pug");
// app.engine(
//   "hbs",
//   expressHbs.engine({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// ); // hbs templating engine
// app.set("view engine", "hbs")
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users",
    users: users,
    hasUsers: users.length > 0,
  });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

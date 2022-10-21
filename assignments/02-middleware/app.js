const app = require("express")();

const port = 3000;

// app.use((req, res, next) => {
//   console.log("The first middleware function");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("The second middleware function");
//   res.send("<h1>Hello from the second middleware function!</h1>");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>All the Users in /users</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Handling the rest of the routes in / path!</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

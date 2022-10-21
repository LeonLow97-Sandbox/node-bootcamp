const path = require("path");

const express = require("express");

const mainRoutes = require("./routes/index");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

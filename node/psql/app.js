const express = require("express");
const path = require("node:path");
const app = express();
const newRoute = require("./routes/newRoute.js");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/new", newRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const path = require('node:path')
const app = express();
const  newRoute = require("./routes/newRoute.js");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/new',newRoute);


// GET / - to log available usernames in the DB to the terminal. For now, just put in a simple console.log("usernames will be logged here - wip").
app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

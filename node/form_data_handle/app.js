const express = require("express");
const app = express();
const path = require("node:path");
const usersRouter = require("./routes/usersRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use('/',usersRouter)

const PORT = process.env.PORT || 3030
app.listen(PORT,(error) => {
  if(error){
    throw error
  }
  console.log(`listening to port ${PORT}`);
})
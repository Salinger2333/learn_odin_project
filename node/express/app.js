import express from "express";
import authorRouter from "./routes/authorRoutes.js";
import bookRouter from "./routes/bookRoutes.js";
import indexRouter from "./routes/indexRoutes.js";
const app = express();

app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send();
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is start, listen to 3000 port");
});

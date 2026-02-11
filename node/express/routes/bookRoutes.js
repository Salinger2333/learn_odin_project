import { Router } from "express";
const bookRouter = Router();

bookRouter
  .get("/", (req, res) => res.send("this is library and there are many books"))
  .get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`book id is ${bookId}`)
  });

export default bookRouter
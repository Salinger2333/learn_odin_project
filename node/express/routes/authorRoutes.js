import { Router } from "express";
const authorRouter = Router();

authorRouter
  .get("/", (req, res) => res.send("All authors"))
  .get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    res.send(`author id is ${authorId}`);
  });

export default authorRouter
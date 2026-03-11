import { Router } from "express";
import { getAuthorById } from "../controller/authorController.js";
const authorRouter = Router();

authorRouter
  .get("/", (req, res) => res.send("All authors"))
  .get("/:authorId", getAuthorById);

export default authorRouter;

import { Router } from "express";
const indexRouter = Router();

indexRouter
  .get("/", (req, res) => res.send("this is index and idont know what is it"))
  .get("/:index", (req, res) => {
    const { index } = req.params;
    res.send(`index id is ${index}`);
  });

export default indexRouter
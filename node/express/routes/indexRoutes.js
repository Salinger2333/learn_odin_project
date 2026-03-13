import { Router } from "express";
const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

indexRouter
  .get("/", (req, res) => {
    res.render("index", { links: links, users });
  })
  .get("/:index", (req, res) => {
    const { index } = req.params;
    res.send(`index id is ${index}`);
  });

export default indexRouter;

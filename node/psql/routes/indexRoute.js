const router = require("express").Router();
const userController = require("../controllers/indexController");

router
  .get("/", userController.getUsernames)
  .get("/search", userController.searchUser);

module.exports = router;

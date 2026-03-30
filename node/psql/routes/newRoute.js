const newController = require("../controllers/newController");
const router = require("express").Router();
router
  .get("/", newController.createUsernameGet)
  .post("/", newController.createUsernamePost);

module.exports = router;

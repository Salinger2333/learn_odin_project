const newController = require("../controllers/newController");
const router = require("express").Router();
router
  .get("/usernames", newController.getUsernames)
  .get("/", newController.createUsernameGet)
  .post("/", newController.createUsernamePost);

module.exports = router;

// GET /new - to display a HTML form to the user with one username input text field. It will submit to the next route.
// POST /new - will save the incoming username data to the DB. For now, just log console.log("username to be saved: ", req.body.username).

const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("new");
}).post("/",(req,res) => {
  console.log("username to be saved: ", req.body.username);
})

module.exports = router;

const db = require("../db/queries");

async function createUsernameGet(req, res) {
  res.render("new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  createUsernameGet,
  createUsernamePost,
};

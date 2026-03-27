const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("usernames:", usernames);
  res.send(usernames.map((user) => user.username).join(","));
}

async function createUsernameGet(req, res) {
  res.render("new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/new/usernames");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};

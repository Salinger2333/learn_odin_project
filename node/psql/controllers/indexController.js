const db = require("../db/queries");


async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.render('index', { users: usernames });
}

async function searchUser(req,res) {
  const { username } = req.query;
  console.log(req.query);
  const users = await db.searchUsers(username)
  res.render('index', { users });
}

module.exports = {
  getUsernames,
  searchUser
};
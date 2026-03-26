const db = require("../db/queries");

async function getAllUsernames(req,res)   {
  const usernames = await db.getAllUsernames()
}
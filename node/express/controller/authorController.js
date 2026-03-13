import { getAuthorById as getAuthorByIdFromDb } from "../db/db.js";
import { CustomNotFoundError } from "../error/CustomNotFoundError.js";

async function getAuthorById(req, res) {
  const { authorId } = req.params;
  const author = await getAuthorByIdFromDb(Number(authorId));

  if(!author){
    throw new CustomNotFoundError("Author not found")
  }

  res.send(`Author name:${author.name}`)
}

export { getAuthorById };

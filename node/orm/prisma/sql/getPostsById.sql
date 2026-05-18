SELECT id, title
FROM "Post"
WHERE id > $1 AND id < $2
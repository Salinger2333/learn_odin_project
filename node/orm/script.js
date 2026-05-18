import { prisma } from "./lib/prisma.js";
import {
  getUsersWithPosts,
  getPostsById,
  getUsersByIds
} from "./generated/prisma/sql/index.js";

async function main() {
  // const users = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.com",
  //     posts: {
  //       create: {
  //         title: "Hello World",
  //         content: "This is my first post!",
  //         published: true,
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  // console.log("create users: ", users);

  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Second Post",
  //     content: "This is my second post!",
  //     published: false,
  //     authorId: 1,
  //   },
  // });

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });

  // console.log("find all users: ", JSON.stringify(allUsers, null, 2));

  const usersWithPostsCount = (await prisma.$queryRawTyped(getUsersWithPosts())).map(u => ({
    ...u,
    postCount: Number(u.postCount),
  }));
  console.log("users with posts count: ", usersWithPostsCount);

  const rawSqlPost = await prisma.$queryRawTyped(getPostsById(1, 3));
  console.log("raw SQL post: ", rawSqlPost);

  const getUsersByIdsResultRawSql = await prisma.$queryRawTyped(getUsersByIds([1, 2]));
  console.log("get users by IDs (raw SQL): ", getUsersByIdsResultRawSql);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { prisma } from "./lib/prisma.js";

async function main() {
  const users = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.com",
      posts: {
        create: {
          title: "Hello World",
          content: "This is my first post!",
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });

  console.log("create users: ", users);

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log("find all users: ", JSON.stringify(allUsers, null, 2));
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

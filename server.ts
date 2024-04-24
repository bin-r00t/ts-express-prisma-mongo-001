import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  let allUsers = await prisma.user.findMany();
  console.log(allUsers, "creating ....");
  // create
  await prisma.user.create({
    data: {
      name: "Liubin",
      email: "liubin@heapwave.com",
      nickname: "This is a nickname",
      auth_id: "auth0|6627af6192649826dfdbf8b5",
    },
  });
  // after create
  allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

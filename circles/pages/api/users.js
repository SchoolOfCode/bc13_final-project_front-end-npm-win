import prisma from "../../lib/prisma";

//return user data for user that has email same as session user

export default async function handleUser(req, res) {
  const getUser = await prisma.users.findMany({
    where: {
      email: {
        contains: req.body.email,
      },
    },
    include: {
      user_circles: true,
      link_worker:true
    },
  });
  res.json(getUser);
}

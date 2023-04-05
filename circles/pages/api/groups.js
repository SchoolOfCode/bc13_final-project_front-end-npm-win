// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";

import prisma from "../../lib/prisma";

export default async function handleGroups(req, res) {
  const hello = await prisma.groups.findMany();
  res.json(hello);
}


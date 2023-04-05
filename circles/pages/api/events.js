import prisma from "../../lib/prisma";


export default async function handleEvents(req, res) {
    const data = await prisma.events.findMany({
      orderBy: [
        {
          start_time: 'asc',
        },
      
      ]});
    res.json(data);
    console.log(data)
  }
  
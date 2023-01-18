import { PrismaClient } from '@prisma/client'
import { CLIENT_PUBLIC_FILES_PATH } from 'next/dist/shared/lib/constants'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await createComment(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function createComment(req, res) {
    const body = req.body
    console.log(body)
    console.log(body.club_name)
    try {
      const newEntry = await prisma.groups.create({ /// will need to change groups to comments table value?
        data: {
          club_name: body.club_name,
          days: body.days,
          times: body.times,
          image: body.image,
          tagline: body.tagline,
          description: body.description,
          location: body.location,
          availability: body.availability,
          email: body.email,
          telephone: body.telephone
        }
      })
      return res.status(200).json(newEntry, { success: true })
    } catch (error) {
      console.error('Request error', error)
      res.status(500).json({ error: 'Error creating Comment', success: false })
    }
  }
  
import { NextRequest } from 'next/server'
import { db } from '../../../../../lib/mongodb'

export async function GET(request: NextRequest, { params }: { params: { name: string } }) {
  const siteName = params.name
  
  const blogs = await db.collection('blogs')
    .find({ projects: siteName })
    .sort({ createdAt: -1 })
    .toArray()
  
  return Response.json(blogs)
}
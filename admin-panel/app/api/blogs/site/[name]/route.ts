import { NextRequest } from 'next/server'
import { getDb } from '../../../../../lib/mongodb'

export async function GET(request: NextRequest, { params }: { params: { name: string } }) {
  const db = await getDb()
  const siteName = params.name
  
  const blogs = await db.collection('blogs')
    .find({ projects: siteName, active: { $ne: false } })
    .sort({ createdAt: -1 })
    .toArray()
  
  return Response.json(blogs)
}
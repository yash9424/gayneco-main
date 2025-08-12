import { NextRequest } from 'next/server'
import { db } from '../../../lib/mongodb'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const projects = formData.getAll('projects') as string[]

  const blogPost = {
    title,
    content,
    projects,
    createdAt: new Date()
  }

  await db.collection('blogs').insertOne(blogPost)
  return Response.json({ success: true })
}

export async function GET() {
  const blogs = await db.collection('blogs').find({}).sort({ createdAt: -1 }).toArray()
  return Response.json(blogs)
}
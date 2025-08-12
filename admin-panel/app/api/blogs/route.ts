import { NextRequest } from 'next/server'
import { db } from '../../../lib/mongodb'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const projectsString = formData.get('projects') as string
  const projects = JSON.parse(projectsString || '[]')
  
  const blogPost = {
    title,
    excerpt,
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
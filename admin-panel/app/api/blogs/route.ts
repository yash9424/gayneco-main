import { NextRequest } from 'next/server'
import { db } from '../../../lib/mongodb'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const projectsString = formData.get('projects') as string
  const projects = JSON.parse(projectsString || '[]')
  const imageFile = formData.get('image') as File | null
  
  let imageBase64 = null
  if (imageFile) {
    const bytes = await imageFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    imageBase64 = buffer.toString('base64')
  }
  
  const blogPost = {
    title,
    excerpt,
    content,
    projects,
    image: imageBase64,
    active: true,
    createdAt: new Date()
  }

  await db.collection('blogs').insertOne(blogPost)
  return Response.json({ success: true })
}

export async function GET() {
  const blogs = await db.collection('blogs').find({}).sort({ createdAt: -1 }).toArray()
  return Response.json(blogs)
}
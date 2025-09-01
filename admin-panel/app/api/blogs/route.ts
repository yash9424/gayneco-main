import { NextRequest } from 'next/server'
import { getDb } from '../../../lib/mongodb'

export async function POST(request: NextRequest) {
  try {
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

    console.log('Creating blog with projects:', projects)
    const db = await getDb()
    await db.collection('blogs').insertOne(blogPost)
    return Response.json({ success: true })
  } catch (error) {
    console.error('Blog POST error:', error)
    return Response.json({ success: false, error: 'Failed to create blog' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  return Response.json([])
}

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData()
    const id = formData.get('id') as string
    const title = formData.get('title') as string
    const excerpt = formData.get('excerpt') as string
    const content = formData.get('content') as string
    const projectsString = formData.get('projects') as string
    const projects = JSON.parse(projectsString || '[]')
    const imageFile = formData.get('image') as File | null
    
    const updateData: any = {
      title,
      excerpt,
      content,
      projects,
      updatedAt: new Date()
    }
    
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      updateData.image = buffer.toString('base64')
    }

    console.log('Updating blog with projects:', projects)
    const db = await getDb()
    await db.collection('blogs').updateOne({ _id: new (await import('mongodb')).ObjectId(id) }, { $set: updateData })
    return Response.json({ success: true })
  } catch (error) {
    console.error('Blog PUT error:', error)
    return Response.json({ success: false, error: 'Failed to update blog' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return Response.json({ error: 'ID required' }, { status: 400 })
    }
    
    const db = await getDb()
    await db.collection('blogs').deleteOne({ _id: new (await import('mongodb')).ObjectId(id) })
    return Response.json({ success: true })
  } catch (error) {
    console.error('Blog DELETE error:', error)
    return Response.json({ success: false, error: 'Failed to delete blog' }, { status: 500 })
  }
}
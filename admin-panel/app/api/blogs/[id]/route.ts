import { NextRequest } from 'next/server'
import { db } from '../../../../lib/mongodb'
import { ObjectId } from 'mongodb'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const blog = await db.collection('blogs').findOne({ _id: new ObjectId(params.id) })
    if (!blog) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    return Response.json(blog)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const excerpt = formData.get('excerpt') as string
    const content = formData.get('content') as string
    const projects = JSON.parse(formData.get('projects') as string)
    const imageFile = formData.get('image') as File | null
    
    const updateData: any = {
      title,
      excerpt,
      content,
      projects,
      updatedAt: new Date()
    }
    
    if (imageFile && imageFile.size > 0) {
      const imageBuffer = await imageFile.arrayBuffer()
      const imageBase64 = Buffer.from(imageBuffer).toString('base64')
      updateData.image = imageBase64
    }
    
    const result = await db.collection('blogs').updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updateData }
    )
    
    if (result.matchedCount === 0) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to update blog' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await db.collection('blogs').deleteOne({ _id: new ObjectId(params.id) })
    
    if (result.deletedCount === 0) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { active } = await request.json()
    
    const result = await db.collection('blogs').updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { active, updatedAt: new Date() } }
    )
    
    if (result.matchedCount === 0) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to update blog status' }, { status: 500 })
  }
}
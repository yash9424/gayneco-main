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
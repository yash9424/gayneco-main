import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`http://localhost:3011/api/blogs/${params.id}`)
    if (!response.ok) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    const blog = await response.json()
    return Response.json(blog)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}
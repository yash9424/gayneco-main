import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`https://binzo.fun/api/blogs/${params.id}`, {
      headers: {
        'Origin': 'https://samedayultrasoundaz.com'
      }
    })
    if (!response.ok) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    const blog = await response.json()
    return Response.json(blog)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}
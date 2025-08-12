export async function GET() {
  try {
    const response = await fetch('http://localhost:3011/api/blogs/NeedUltraSound')
    if (!response.ok) {
      return Response.json([])
    }
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json([])
  }
}
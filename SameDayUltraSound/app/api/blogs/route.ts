export async function GET() {
  try {
    const response = await fetch('http://72.60.30.153/api/cross-domain/blogs', {
      headers: {
        'Origin': 'https://samedayultrasoundaz.com'
      }
    })
    if (!response.ok) {
      return Response.json([])
    }
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json([])
  }
}
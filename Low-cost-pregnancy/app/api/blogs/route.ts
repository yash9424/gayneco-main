export async function GET() {
  try {
    const response = await fetch('https://binzo.fun/api/blogs?project=Low-cost-pregnancy', {
      headers: {
        'Origin': 'https://lowcostpregnancy.com'
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
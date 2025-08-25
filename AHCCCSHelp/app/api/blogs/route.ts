export async function GET() {
  try {
    const response = await fetch('https://binzo.fun/api/blogs?project=AHCCCSHelp', {
      headers: {
        'Origin': 'https://ahcccshelp.com'
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
export async function GET() {
  try {
    const response = await fetch('https://binzo.fun/api/blogs?project=Wic-Pregnancy-help', {
      headers: {
        'Origin': 'https://wicpregnancyhelp.com',
        'Cache-Control': 'no-cache'
      },
      cache: 'no-store'
    })
    if (!response.ok) {
      return Response.json([], {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
    }
    const data = await response.json()
    return Response.json(data, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    return Response.json([], {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  }
}
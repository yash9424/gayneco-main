export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const queryString = searchParams.toString()
  
  try {
    const response = await fetch(`https://binzo.fun/api/chat?${queryString}`)
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch chat data' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const response = await fetch('https://binzo.fun/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    
    // Ensure success field exists for chat component
    if (!data.success && !data.error) {
      data.success = true
    }
    
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to send chat data', success: false }, { status: 500 })
  }
}
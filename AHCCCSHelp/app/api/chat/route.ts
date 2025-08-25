export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const response = await fetch(`https://binzo.fun/api/chat?${searchParams.toString()}`, {
      headers: {
        'Origin': 'https://ahcccshelp.com'
      }
    })
    if (!response.ok) {
      return Response.json({ error: 'Failed to fetch' }, { status: 500 })
    }
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Chat service unavailable' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const response = await fetch('https://binzo.fun/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://ahcccshelp.com'
      },
      body: JSON.stringify(body)
    })
    if (!response.ok) {
      return Response.json({ error: 'Failed to send' }, { status: 500 })
    }
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Chat service unavailable' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const response = await fetch(`https://binzo.fun/api/chat?${searchParams.toString()}`, {
      method: 'DELETE',
      headers: {
        'Origin': 'https://ahcccshelp.com'
      }
    })
    if (!response.ok) {
      return Response.json({ error: 'Failed to delete' }, { status: 500 })
    }
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Chat service unavailable' }, { status: 500 })
  }
}
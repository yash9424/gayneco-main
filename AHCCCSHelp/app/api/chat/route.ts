const ALLOWED_PARAMS = ['message', 'userId', 'sessionId', 'timestamp'];
const API_BASE_URL = 'https://binzo.fun/api/chat';

function sanitizeParams(searchParams: URLSearchParams): string {
  const sanitized = new URLSearchParams();
  for (const [key, value] of searchParams) {
    if (ALLOWED_PARAMS.includes(key) && value.trim()) {
      sanitized.append(key, value.trim());
    }
  }
  return sanitized.toString();
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sanitizedQuery = sanitizeParams(searchParams);
    
    const response = await fetch(`${API_BASE_URL}?${sanitizedQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'AHCCCSHelp/1.0'
      },
      timeout: 10000
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Chat GET error:', error);
    return Response.json({ 
      error: 'Chat service unavailable', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.message || typeof body.message !== 'string') {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }
    
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'AHCCCSHelp/1.0'
      },
      body: JSON.stringify({
        message: body.message.trim(),
        userId: body.userId || 'anonymous',
        sessionId: body.sessionId || Date.now().toString(),
        timestamp: new Date().toISOString()
      }),
      timeout: 15000
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Chat POST error:', error);
    return Response.json({ 
      error: 'Failed to send message', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 503 });
  }
}
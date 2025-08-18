import { NextRequest } from 'next/server'
import { db, client } from '../../../lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(request: NextRequest) {
  try {
    await client.connect()
    
    const { message, project, userInfo, isAdmin, chatId } = await request.json()
    
    const chatMessage = {
      chatId: chatId || new ObjectId().toString(),
      project,
      userInfo,
      message,
      isAdmin: isAdmin || false,
      timestamp: new Date()
    }
    
    await db.collection('chats').insertOne(chatMessage)
    
    const response = Response.json({ success: true, chatId: chatMessage.chatId })
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return response
  } catch (error) {
    console.error('Chat API error:', error)
    const response = Response.json({ success: false, error: error.message }, { status: 500 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
  }
}

export async function GET(request: NextRequest) {
  try {
    await client.connect()
    
    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')
    
    let response
    if (chatId) {
      const messages = await db.collection('chats')
        .find({ chatId })
        .sort({ timestamp: 1 })
        .toArray()
      response = Response.json(messages)
    } else {
      const chats = await db.collection('chats')
        .aggregate([
          { $sort: { timestamp: -1 } },
          { $group: {
            _id: { chatId: '$chatId', project: '$project' },
            userInfo: { $first: '$userInfo' },
            lastMessage: { $first: '$timestamp' },
            project: { $first: '$project' },
            chatId: { $first: '$chatId' }
          }}
        ])
        .toArray()
      response = Response.json(chats)
    }
    
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return response
  } catch (error) {
    console.error('Chat GET API error:', error)
    const response = Response.json({ error: error.message }, { status: 500 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await client.connect()
    
    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')
    
    if (!chatId) {
      const response = Response.json({ error: 'chatId required' }, { status: 400 })
      response.headers.set('Access-Control-Allow-Origin', '*')
      return response
    }
    
    await db.collection('chats').deleteMany({ chatId })
    
    const response = Response.json({ success: true })
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
  } catch (error) {
    console.error('Chat DELETE API error:', error)
    const response = Response.json({ error: error.message }, { status: 500 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
  }
}

export async function OPTIONS() {
  const response = new Response(null, { status: 200 })
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}
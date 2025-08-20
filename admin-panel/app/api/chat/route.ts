import { NextRequest } from 'next/server'
import { getDb } from '../../../lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(request: NextRequest) {
  try {
    const db = await getDb()
    const { message, project, userInfo, isAdmin, chatId } = await request.json()
    
    let finalChatId = chatId
    
    // If no chatId provided, check for existing conversation based on user identity
    if (!chatId && userInfo && !isAdmin) {
      const userIdentity = `${userInfo.name}_${userInfo.age}_${userInfo.contact}_${project}`
      
      // Look for existing conversation with same user identity
      const existingChat = await db.collection('chats')
        .findOne({ userIdentity }, { sort: { timestamp: -1 } })
      
      if (existingChat) {
        finalChatId = existingChat.chatId
      } else {
        finalChatId = new ObjectId().toString()
      }
    } else if (!chatId) {
      finalChatId = new ObjectId().toString()
    }
    
    const chatMessage = {
      chatId: finalChatId,
      userIdentity: userInfo && !isAdmin ? `${userInfo.name}_${userInfo.age}_${userInfo.contact}_${project}` : null,
      project,
      userInfo,
      message,
      isAdmin: isAdmin || false,
      timestamp: new Date()
    }
    
    await db.collection('chats').insertOne(chatMessage)
    
    const response = Response.json({ success: true, chatId: finalChatId })
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
    const db = await getDb()
    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')
    const name = searchParams.get('name')
    const age = searchParams.get('age')
    const contact = searchParams.get('contact')
    const project = searchParams.get('project')
    
    let response
    if (chatId) {
      const messages = await db.collection('chats')
        .find({ chatId })
        .sort({ timestamp: 1 })
        .toArray()
      response = Response.json(messages)
    } else if (name && age && contact && project) {
      // Check for existing conversation
      const userIdentity = `${name}_${age}_${contact}_${project}`
      const existingMessages = await db.collection('chats')
        .find({ userIdentity })
        .sort({ timestamp: 1 })
        .toArray()
      
      if (existingMessages.length > 0) {
        response = Response.json({ 
          exists: true, 
          chatId: existingMessages[0].chatId,
          messages: existingMessages 
        })
      } else {
        response = Response.json({ exists: false })
      }
    } else {
      const chats = await db.collection('chats')
        .aggregate([
          { $sort: { timestamp: -1 } },
          { $group: {
            _id: { userIdentity: '$userIdentity', project: '$project' },
            userInfo: { $first: '$userInfo' },
            lastMessage: { $first: '$timestamp' },
            project: { $first: '$project' },
            chatId: { $first: '$chatId' }
          }},
          { $match: { '_id.userIdentity': { $ne: null } } }
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
    const db = await getDb()
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
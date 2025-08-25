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
    
    return Response.json({ success: true, chatId: finalChatId })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
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
    
    if (chatId) {
      const messages = await db.collection('chats')
        .find({ chatId })
        .sort({ timestamp: 1 })
        .toArray()
      return Response.json(messages)
    } else if (name && age && contact && project) {
      // Check for existing conversation
      const userIdentity = `${name}_${age}_${contact}_${project}`
      const existingMessages = await db.collection('chats')
        .find({ userIdentity })
        .sort({ timestamp: 1 })
        .toArray()
      
      if (existingMessages.length > 0) {
        return Response.json({ 
          exists: true, 
          chatId: existingMessages[0].chatId,
          messages: existingMessages 
        })
      } else {
        return Response.json({ exists: false })
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
      return Response.json(chats)
    }
  } catch (error) {
    console.error('Chat GET API error:', error)
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const db = await getDb()
    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')
    
    if (!chatId) {
      return Response.json({ error: 'chatId required' }, { status: 400 })
    }
    
    await db.collection('chats').deleteMany({ chatId })
    
    return Response.json({ success: true })
  } catch (error) {
    console.error('Chat DELETE API error:', error)
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200 })
}
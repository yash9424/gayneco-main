import { NextRequest } from 'next/server'
import { db, client } from '../../../../lib/mongodb'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await client.connect()
    
    const messages = await db.collection('chats')
      .find({ chatId: params.id })
      .sort({ timestamp: 1 })
      .toArray()
    
    return Response.json({ messages })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await client.connect()
    
    const { message, isAdmin } = await request.json()
    
    const chatMessage = {
      chatId: params.id,
      message,
      isAdmin,
      timestamp: new Date()
    }
    
    await db.collection('chats').insertOne(chatMessage)
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
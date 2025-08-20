import { NextRequest } from 'next/server'
import { getDb } from '../../../../lib/mongodb'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const db = await getDb()
    
    const messages = await db.collection('chats')
      .find({ chatId: params.id })
      .sort({ timestamp: 1 })
      .toArray()
    
    return Response.json({ messages })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const db = await getDb()
    
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
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}
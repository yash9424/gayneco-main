import { NextRequest } from 'next/server'
import { db } from '../../../lib/mongodb'

export async function POST(request: NextRequest) {
  const { message, project, userId } = await request.json()
  
  const chatMessage = {
    message,
    project,
    userId,
    timestamp: new Date()
  }

  await db.collection('chats').insertOne(chatMessage)
  return Response.json({ success: true })
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const project = searchParams.get('project')
  
  const query = project ? { project } : {}
  const chats = await db.collection('chats').find(query).sort({ timestamp: -1 }).toArray()
  
  return Response.json(chats)
}
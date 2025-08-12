import { NextRequest } from 'next/server'
import { db } from '../../../lib/mongodb'
import bcrypt from 'bcryptjs'

export async function GET() {
  const admin = await db.collection('admins').findOne({})
  return Response.json({ email: admin?.email || 'Not found' })
}

export async function PUT(request: NextRequest) {
  const { currentPassword, newEmail, newPassword } = await request.json()
  
  const admin = await db.collection('admins').findOne({})
  
  if (!admin || !await bcrypt.compare(currentPassword, admin.password)) {
    return Response.json({ success: false, message: 'Current password is incorrect' }, { status: 401 })
  }
  
  const updateData: any = {}
  if (newEmail) updateData.email = newEmail
  if (newPassword) updateData.password = await bcrypt.hash(newPassword, 10)
  
  await db.collection('admins').updateOne({ email: admin.email }, { $set: updateData })
  
  return Response.json({ success: true, message: 'Credentials updated successfully' })
}
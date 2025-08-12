import { NextRequest } from 'next/server'
import { db } from '../../../lib/mongodb'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  
  const admin = await db.collection('admins').findOne({ email })
  
  if (admin && await bcrypt.compare(password, admin.password)) {
    return Response.json({ success: true, admin: { email: admin.email, name: admin.name } })
  } else {
    return Response.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  }
}
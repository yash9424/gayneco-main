import { NextRequest } from 'next/server'
import { getDb } from '../../../lib/mongodb'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  
  // Default admin credentials
  const defaultEmail = 'admin@gayneco.com'
  const defaultPassword = 'admin123'
  
  if (email === defaultEmail && password === defaultPassword) {
    return Response.json({ success: true, admin: { email, name: 'Admin User' } })
  } else {
    return Response.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  }
}
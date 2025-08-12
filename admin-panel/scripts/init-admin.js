const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')

async function initAdmin() {
  const client = new MongoClient('mongodb://localhost:27017')
  
  try {
    await client.connect()
    const db = client.db('gynecologist')
    
    const existingAdmin = await db.collection('admins').findOne({ email: 'admin@gayneco.com' })
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10)
      await db.collection('admins').insertOne({
        email: 'admin@gayneco.com',
        password: hashedPassword,
        name: 'Admin User',
        createdAt: new Date()
      })
      console.log('Admin user created successfully')
    } else {
      console.log('Admin user already exists')
    }
  } finally {
    await client.close()
  }
}

initAdmin().catch(console.error)
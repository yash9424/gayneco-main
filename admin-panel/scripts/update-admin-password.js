const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')

async function updateAdminPassword() {
  const client = new MongoClient('mongodb://localhost:27017')
  
  try {
    await client.connect()
    const db = client.db('gynecologist')
    
    const hashedPassword = await bcrypt.hash('admin123', 10)
    await db.collection('admins').updateOne(
      { email: 'admin@gayneco.com' },
      { $set: { password: hashedPassword } }
    )
    console.log('Admin password updated to hashed format')
  } finally {
    await client.close()
  }
}

updateAdminPassword().catch(console.error)
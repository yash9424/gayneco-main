import { MongoClient } from 'mongodb'

let client: MongoClient
let db: any

if (!client) {
  client = new MongoClient('mongodb://localhost:27017')
}

if (!db) {
  db = client.db('gynecologist')
}

export { db, client }
import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sde-abs'

if (!process.env.MONGODB_URI && process.env.NODE_ENV === 'production') {
  throw new Error('Please add your Mongo URI to .env.local')
}

let cached: { conn: MongoClient | null; db: Db | null } = {
  conn: null,
  db: null,
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached
  }

  const client = new MongoClient(MONGODB_URI)

  await client.connect()

  const db = client.db('sde-abs')

  cached = {
    conn: client,
    db,
  }

  return cached
}

export async function getDatabase() {
  const { db } = await connectToDatabase()
  return db
}

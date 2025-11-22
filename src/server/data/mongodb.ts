import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://landing_pages_user:landing_pages_password@localhost:27017/landing_pages'
const options = {}

if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const client = new MongoClient(MONGODB_URI, options)
const clientPromise = client.connect()

let db: Db | null = null

export async function connectToDatabase(): Promise<Db> {
  if (db) {
    return db
  }

  const client = await clientPromise
  db = client.db()

  return db
}

export async function disconnectFromDatabase(): Promise<void> {
  if (client) {
    await client.close()
    db = null
  }
}

export default clientPromise

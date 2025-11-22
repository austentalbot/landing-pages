import { connectToDatabase, disconnectFromDatabase } from '@/src/server/data/mongodb'
import { CtaClickthroughService } from '@/src/server/data/services/CtaClickthroughService'

let mongoDataStorageSingleton: MongoDataStorage

export function getMongoDataStorage(): MongoDataStorage {
  if (!mongoDataStorageSingleton) {
    mongoDataStorageSingleton = new MongoDataStorage()
  }
  return mongoDataStorageSingleton
}

export class MongoDataStorage {
  public ctaClickthroughService: CtaClickthroughService

  constructor() {
    this.ctaClickthroughService = new CtaClickthroughService()
  }

  connectToDatabase() {
    return connectToDatabase()
  }

  disconnectFromDatabase() {
    return disconnectFromDatabase()
  }
}

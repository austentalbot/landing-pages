import { Collection } from 'mongodb'
import { connectToDatabase } from '../mongodb'

export class CtaClickthroughService {
  private collectionName = 'ctaclickthrough'

  private async getCollection(): Promise<Collection> {
    const db = await connectToDatabase()
    return db.collection(this.collectionName)
  }

  async saveCTAClickthrough(data: any): Promise<void> {
    const collection = await this.getCollection()
    await collection.insertOne({
      ...data,
      createdAt: new Date(),
    })
  }
}

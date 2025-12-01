import { Collection } from "mongodb";
import { connectToDatabase } from "../mongodb";

interface ContactRequestRecord {
  name: string;
  email: string;
  company: string;
  message: string;
  source?: string;
  metadata?: Record<string, any>;
  createdAt?: Date;
}

export class ContactRequestService {
  private collectionName = "contactrequests";

  private async getCollection(): Promise<Collection<ContactRequestRecord>> {
    const db = await connectToDatabase();
    return db.collection<ContactRequestRecord>(this.collectionName);
  }

  async saveContactRequest(data: ContactRequestRecord): Promise<void> {
    const collection = await this.getCollection();
    await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });
  }
}

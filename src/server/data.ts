import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@/src/server/data/mongodb";
import { CtaClickthroughService } from "@/src/server/data/services/CtaClickthroughService";
import { ContactRequestService } from "@/src/server/data/services/ContactRequestService";

let mongoDataStorageSingleton: MongoDataStorage;

export function getMongoDataStorage(): MongoDataStorage {
  if (!mongoDataStorageSingleton) {
    mongoDataStorageSingleton = new MongoDataStorage();
  }
  return mongoDataStorageSingleton;
}

export class MongoDataStorage {
  public ctaClickthroughService: CtaClickthroughService;
  public contactRequestService: ContactRequestService;

  constructor() {
    this.ctaClickthroughService = new CtaClickthroughService();
    this.contactRequestService = new ContactRequestService();
  }

  connectToDatabase() {
    return connectToDatabase();
  }

  disconnectFromDatabase() {
    return disconnectFromDatabase();
  }
}


import { MongoClient, Db } from 'mongodb';
import dotenv from "dotenv"
import path from 'path';
const p = path.resolve(__dirname,"../.env")
dotenv.config({
  path: p
})

class MongoDBConnection {
  private client: MongoClient | null = null;
  private db: Db | null = null;

  private constructor() {}  
  
  public static getInstance(): MongoDBConnection {
    return new MongoDBConnection();
  }

  public async connect(uri: any, dbName: any): Promise<Db> {
    if (!this.client) {
      try {
        this.client = new MongoClient(uri);
        await this.client.connect();
        console.log('Connected successfully to MongoDB');
        this.db = this.client.db(dbName);
      } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
      }
    }
    return this.db as Db;
  }

 
  public getDB(): Db {
    if (!this.db) {
      throw new Error('Database not initialized. Call connect first.');
    }
    return this.db;
  }


  public async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      console.log('Connection to MongoDB closed');
    }
  }
}

export { MongoDBConnection as default }



import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await new MongoClient(uri).connect()
  },

  async disconnect (): Promise<void> {
    await this.close()
    this.client = null
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  cachedClient = client;
  return client;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { symbol } = req.query;

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection('prices');
    const data = await collection
      .find({ symbol })
      .sort({ timestamp: -1 })
      .limit(20)
      .toArray();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

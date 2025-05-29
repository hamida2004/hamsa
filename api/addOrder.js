import { MongoClient } from 'mongodb';

import { config } from 'dotenv'
config()

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const client = await MongoClient.connect(uri);
        const db = client.db('ordersDB');
        const collection = db.collection('orders');

        const orders = await collection.find().toArray();

        client.close();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching orders' });
    }
}

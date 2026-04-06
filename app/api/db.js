import {MongoClient, ServerApiVersion} from "mongodb";

export async function connectToDB() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@CourseProject.jq8hp.mongodb.net/?appName=CourseProject`;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();

    return {client, db: client.db("rickmorty")};
}
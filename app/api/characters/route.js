import {connectToDB} from "@/app/api/db";

export async function GET() {
    const {db} = await connectToDB();
    const charData = await db.collection("characters").find({}).toArray();

    return new Response(JSON.stringify(charData),
        {status: 200,
        headers: {"Content-Type": "application/json"
        }
    });
}

export async function POST(request) {
    const {db} = await connectToDB();
    const newChar = await request.json();

    const result = await db.collection("characters").insertOne(newChar);
    return new Response(
        "Character added successfully with id " + result.insertedId,
        {
            status: 201,
        }
    )
}
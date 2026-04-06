import { connectToDB } from "@/app/api/db";

export async function GET(request,{params}) {
    const {db} = await connectToDB();
    const {id} = await params;

    const currentChar = await db.collection("characters").findOne({id: parseInt(id)});
    if (!currentChar) {
        return new Response("Character not found", {status: 404});
    }
    return new Response(JSON.stringify(currentChar), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}

export async function DELETE(request, {params}) {
    const {db} = await connectToDB();
    const {id} = await params;
    const deleteResult = await db.collection("characters").deleteOne({id: parseInt(id)});
    const returnString = deleteResult.deletedCount === 1 ? "Character deleted successfully" : "Character not found";
    return new Response(
        returnString,
        {
            status: 200,
        }
    )
}
import Link from "next/link";

const cLink = "https://rickandmortyapi.com/api/character/";

export default async function CharactersPage() {

    const data = await fetch(cLink)
    const characters = await data.json();
    const characterName = characters["results"];

    return (
        <>
            {characterName.map((character) => {
                return (
                    <Link key={character.id} href={"/characters/" + character.id}>
                        <h1>{character.name}</h1>
                    </Link>
                )
            })}
        </>
    )
}
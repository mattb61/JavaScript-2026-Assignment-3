import Image from "next/image";

<<<<<<< Updated upstream

// Fetch the data from the API and then use that data in the static params.
const data = await fetch(cLink)
    const characters = await data.json();
    const characterName = characters["results"];

export async function generateStaticParams() {
    
    const character = await fetch("https://rickandmortyapi.com/api/character/{id}").then((res) => res.json());

    return character.map((char) => ({
        slug: char.slug,
=======
export async function generateStaticParams() {
    const characters = await fetch("https://rickandmortyapi.com/api/character/");
    const charactersJson = await characters.json();
    const characterIds = charactersJson["results"];

    return characterIds.map((character) => ({
        id: character.id.toString()
>>>>>>> Stashed changes
    }))
}

export default async function CharacterDetail(props) {

    const {id} = await props.params;

    const cUrl = "https://rickandmortyapi.com/api/character/";

    const data = await fetch(cUrl + `${id}`);
    const characterDetail = await data.json();
    
    return (
        <>
            <p>{characterDetail.name}</p>
            <p>{characterDetail.species}</p>
            <img src={characterDetail.image} alt="Character image"/>
        </>
    )
}
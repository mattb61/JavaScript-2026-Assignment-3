import Image from "next/image";


// Fetch the data from the API and then use that data in the static params.
const data = await fetch(cLink)
    const characters = await data.json();
    const characterName = characters["results"];

export async function generateStaticParams() {
    
    const character = await fetch("https://rickandmortyapi.com/api/character/{id}").then((res) => res.json());

    return character.map((char) => ({
        slug: char.slug,
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
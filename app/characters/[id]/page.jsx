import Image from "next/image";

export async function generateStaticParams() {
    const characters = await fetch("http://localhost:3000/api/characters/");
    const charactersJson = await characters.json();
    const characterIds = charactersJson;
    console.log(characterIds);

    return characterIds.map((character) => ({
        id: character.id.toString()
    }))
}

export default async function CharacterDetail(props) {

    const {id} = await props.params;

    const cUrl = "http://localhost:3000/api/characters/";

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
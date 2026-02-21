import Image from "next/image";

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
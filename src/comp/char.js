import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../style/main.css'

const Char = () => {
    const {char_name} = useParams();
    const [loader, setLoader] = useState(true);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        if (char_name) {
            setLoader(true);
            fetch(`https://breakingbadapi.com/api/characters?name=${char_name.split("_").join("+")}`)
                .then(res => res.json())
                .then(data => {
                    if (data[0]) {
                        setCharacter(data[0]);
                    }
                })
                .finally(setLoader(false));
        }
    }, [char_name]);

    if (loader) {
        return (
            <p align="center">Loading...</p>
        );
    }

    if (!character) {
        return (
            <p>Character don't find</p>
        )
    }

    return(
        <div>
                <img src={character.img} alt='' className='imgBD'/>
                <p>{character.name}</p>
                <p>{character.nickname}</p>
                <p>{character.birthday}</p>
                <p>{character.status}</p>
                <p>{character.occupation}</p>
        </div>
    )
}

export default Char
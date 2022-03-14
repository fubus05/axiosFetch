import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import { Link } from 'react-router-dom';

const User = () => {
    const {id} = useParams();
    const [episode, getEpisode] = useState(null);
 
    useEffect(() => {
        fetch(`https://breakingbadapi.com/api/episodes/${id}`)
            .then(res => res.json())
            .then(data => getEpisode(data))
    }, [id])

    return(
        <div>
            {
                episode && (episode.map(elem => (
                    <div key={elem.episode_id}>
                        <h1>{elem.title}</h1>
                        <p>{elem.air_date}</p>
                        {elem.characters.map((char, i) => {
                            const name = char.split(" ").join("_");
                            if (name) {
                                return (
                                    <Link to={`/characters/${name}`}>
                                        <li>{name}</li>
                                    </Link>
                                )
                            }
                            return null;
                        })}
                       <Link to={'/'}>
                        <button>Get Back</button>
                        </Link>
                    </div>
                )))
            }
        </div>
    );
}

export default User;
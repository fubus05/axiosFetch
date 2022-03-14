import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../style/main.css'

const Index = () => {
    console.log(document.getElementById('qq'))
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://breakingbadapi.com/api/episodes")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
            <h1>Episodes</h1>
            {
                users.map(elem => (
                    <div className="forDis" key={elem.episode_id}>
                        <div key={elem.login} className='prevBlock'>
                            <Link to={`/episodes/${elem.episode_id}`}>
                                <li>{elem.title}</li>
                            </Link>
                            <p>{elem.season}</p>
                            <p>{elem.air_date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Index;
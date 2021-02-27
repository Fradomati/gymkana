import React, { useState, useEffect } from "react"

// Services
import { getAllGamesFN } from "../../services/Generator_Service"

export const Home = () => {
    const [gamesFound, setGamesFound] = useState()

    useEffect(() => {
        getAllGamesFN().then(arr => {
            setGamesFound(arr)
        })
    }, [])



    if (gamesFound) {
        return (
            <ul>
                {gamesFound.map((e, i) => {
                    return (
                        <li key={i}>{e.title}</li>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <div>Cargando Gymkanas</div>
        )
    }

}
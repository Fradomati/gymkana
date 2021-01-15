import React, { useState } from "react"

// Services
import { getAllGamesFN } from "../../services/Generator_Service"

export const LFG = (props) => {
    const [gamesFound, setGamesFound] = useState()


    const showGames = () => {
        getAllGamesFN().then(arr => {
            setGamesFound(arr)
        })
    }
    console.log("Props del LFG => ", props)
    return (
        <>
            <input type="button" value="Ver juegos" onClick={() => { showGames() }} />
            {gamesFound && (
                <ul>
                    {gamesFound.map((e, i) => {
                        return (
                            <li key={i} onClick=(() => { props.gameState.}) >
                            { e.title }
                            </li>
            )
            })}
        </ul>
    )
}
<hr />
        </>
    )
}
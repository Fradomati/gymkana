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

    const close = () => {
        setGamesFound(false)
    }
    console.log("Props del LFG => ", props)
    return (
        <>
            <input type="button" value="Ver juegos" onClick={() => { showGames() }} />
            <input type="button" value="Crear" onClick={() => { props.gameState(false) }} />
            {gamesFound && (
                <>
                    <ul>
                        {gamesFound.map((e, i) => {
                            return (
                                <li key={i} onClick={() => { props.gameState(e) }} >
                                    {e.title}
                                </li>
                            )
                        })}
                    </ul>
                    <input type="button" value="Cerrar" onClick={() => { close() }} />
                </>
            )
            }
            <hr />
        </>
    )
}
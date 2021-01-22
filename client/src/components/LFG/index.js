import React, { useState } from "react"

// GlobalStyles
import { OrangeButton } from "../../globalStyles/buttons"
import { RightFlexContainer } from "../../globalStyles/containers"

// Style LFG
import { ContainerGames } from "./style"

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
            <RightFlexContainer>
                <OrangeButton type="button" value="Ver juegos" onClick={() => { showGames() }}> Ver Juegos </OrangeButton>
                <OrangeButton type="button" value="Crear" onClick={() => { props.gameState(false) }} > Crear Juego </OrangeButton>
            </RightFlexContainer>
            {gamesFound && (
                <ContainerGames>
                    <input type="button" value="Cerrar" onClick={() => { close() }} />
                    <ul>
                        {gamesFound.map((e, i) => {
                            return (
                                <li key={i} onClick={() => { props.gameState(e) }} >
                                    {e.title}
                                </li>
                            )
                        })}
                    </ul>

                </ContainerGames>
            )
            }
            <hr />
        </>
    )
}
import React, { useState } from "react"

// GlobalStyles
import { OrangeButton } from "../../globalStyles/buttons"
import { RightFlexContainer } from "../../globalStyles/containers"

// Style LFG
import { ContainerGames, LiGames, LiGamesDark, Hr } from "./style"

// Services
import { getAllGamesFN } from "../../services/Generator_Service"

export const LFG = (props) => {
    const [gamesFound, setGamesFound] = useState()
    const [openBox, setOpenBox] = useState(false)



    const showGames = () => {
        getAllGamesFN().then(arr => {
            setGamesFound(arr)
        })
    }

    const close = () => {
        setGamesFound(false)
    }
    const open = () => {
        if (openBox == false) {
            showGames()
            setOpenBox(true)
        } else {
            close()
            setOpenBox(false)
        }
    }


    console.log("Props del LFG => ", props)
    return (
        <>
            <RightFlexContainer>
                <OrangeButton type="button" value="Ver juegos" onClick={() => { open() }}> Ver Juegos </OrangeButton>
                <OrangeButton type="button" value="Crear" onClick={() => { props.gameState(false) }} > Crear Juego </OrangeButton>
            </RightFlexContainer>
            {gamesFound && (
                <ContainerGames>
                    <ul>
                        {gamesFound.map((e, i) => {
                            return (
                                <>
                                    {i % 2 == 0 ?
                                        <LiGamesDark key={i} onClick={() => { props.gameState(e) }} >
                                            {e.title}
                                        </LiGamesDark>
                                        :
                                        <LiGames key={i} onClick={() => { props.gameState(e) }} >
                                            {e.title}
                                        </LiGames>}
                                </>
                            )
                        })}
                    </ul>

                </ContainerGames>
            )
            }
            <Hr />
        </>
    )
}
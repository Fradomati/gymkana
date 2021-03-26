import React, { useState, useEffect } from "react";

// Service
import { getGameFN } from "../../services/Generator_Service"
import { createBoard } from "../../services/Board_Service"
// Components 
import { Loading } from "../../components/Loading/index"
// Styles
import { CenterMiddleCointaner, CenterFlexContainer, FlexBtwContainer, SpaceOne } from "../../globalStyles/containers"
import { OrangeButton, OrangeInput } from "../../globalStyles/buttons"
import { GreyContainer, TitleDiv, DescriptionDiv } from "./style"


export const GameView = (props) => {
    const share_url = props.match.params.share_url
    const [game, setGame] = useState()

    useEffect(() => {
        getGameFN({ share_url }).then(result => {
            setGame(result.game)
        })
    }, [])

    const crearTablero = (game_id, challengers) => {
        createBoard({ game_id, challengers }).then(result => {
            console.log(result)
            // Meter aquí el History que lleve a la página del tablero actual, si el status = 200
        }
        )
    }

    return (
        <>
            {game ? (
                <CenterMiddleCointaner>
                    <GreyContainer>
                        <TitleDiv>{game.title}</TitleDiv>
                        <DescriptionDiv>{game.description}</DescriptionDiv>
                        <FlexBtwContainer>
                            <div>{game.tags[0]}</div>
                            <div>{game.category[0]}</div>
                            <div>{game.challengers.length}</div>
                        </FlexBtwContainer>
                        <SpaceOne />
                        <CenterFlexContainer>
                            <OrangeButton onClick={() => { crearTablero(game._id, game.challengers) }}>Iniciar Gymkana</OrangeButton>
                        </CenterFlexContainer>
                    </GreyContainer>
                </CenterMiddleCointaner>

            ) :
                (
                    <Loading />
                )}
        </>
    )
}
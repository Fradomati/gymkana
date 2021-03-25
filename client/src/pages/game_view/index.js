import React, { useState, useEffect } from "react";

// Service
import { getGameFN } from "../../services/Generator_Service"

// Components 
import { Loading } from "../../components/Loading/index"


export const GameView = (props) => {
    const share_url = props.match.params.share_url
    const [game, setGame] = useState()

    useEffect(() => {
        getGameFN({ share_url }).then(result => {
            //  setGame(result.game)
        })
    }, [])

    return (
        <>
            {game ? (
                <div>{game.title}</div>

            ) :
                (
                    <Loading />
                )}
        </>
    )
}
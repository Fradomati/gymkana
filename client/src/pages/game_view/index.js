import React, { useState, useEffect } from "react";

import { getGameFN } from "../../services/Generator_Service"


export const GameView = (props) => {
    const share_url = props.match.params.share_url
    const { game, setGame } = useState()

    useEffect(() => {
        getGameFN({ share_url }).then(result => {
            console.log(result)
        })
    }, [])

    return (
        <>
            <div>Estás viendo X Juego</div>
        </>
    )
}
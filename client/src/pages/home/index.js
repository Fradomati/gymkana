import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Services
import { getAllGamesFN } from "../../services/Generator_Service"
// Components
import { Loading } from "../../components/Loading"
// Test

export const Home = () => {
    const [gamesFound, setGamesFound] = useState()

    useEffect(() => {
        getAllGamesFN().then(arr => {
            setGamesFound(arr)
        })
    }, [])

    if (gamesFound) {
        return (
            <>
                <ul>
                    {gamesFound.map((e, i) => {
                        return (
                            <li key={i} ><Link to={`/game/${e.share_url}`}>{e.title}</Link></li>
                        )
                    })}
                </ul>
            </>
        )
    } else {
        return (
            <Loading />
        )
    }

}
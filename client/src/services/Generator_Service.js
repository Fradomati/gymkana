import { generatorService } from "./Connections"

/* Here create The Game */
export const createGameFN = async ({ title, description, share_url, category, tags }) => {

    const response = await generatorService.post("/createGame", {
        title,
        description,
        share_url,
        category,
        tags
    })

    return response.data
}

/* Push a new challenger to the game */

export const addNewChallengertoGame = async ({ challenger_id, game_id }) => {
    const response = await generatorService.post("/addNewChallengertoGame", {
        challenger_id,
        game_id
    })

    return response.data
}

/*  Get all Games created */

export const getAllGamesFN = async () => {
    const response = await generatorService.get("/findAll")
    return response.data
}

/* Get a Game created */

export const getGameFN = async ({ share_url }) => {
    const response = await generatorService.get(`/getGame/${share_url}`)
    return response.data
}

/* Update positions of Challengers into the Game */

export const updatePositionsOfChallengersFN = async ({ gameID, idsCGER }) => {
    const response = await generatorService.post("/updatePositionsOfChallengers", {
        gameID, idsCGER
    })
    console.log("Updated:", response.data)
    return response.data.update
}

/* Remove a Challenger ID of the Array of challengers */

export const removeChallengerOfGame = async ({ challenger_id, game_id }) => {
    const response = await generatorService.post("/removeChallengerOfArray", {
        challenger_id,
        game_id
    })
    return response.data
}

/* Pass ID of Board finished to the Game */
export const passBoardEndToGameRanking = async ({ game_id, board_id }) => {
    const response = await generatorService.post("/sendBoardEndedToRanking", {
        game_id,
        board_id
    })
    return response.data
}
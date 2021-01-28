import { generatorService } from "./Connections"


/* Here create The Game */
export const createGameFN = async ({ title, description, category, tags }) => {

    const response = await generatorService.post("/createGame", {
        title,
        description,
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


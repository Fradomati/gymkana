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

export const getAllGamesFN = async () => {
    const response = await generatorService.get("/findAll")
    return response.data
}
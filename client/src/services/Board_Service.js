import { boardService } from "./Connections"

export const createBoard = async ({ game_id, challengers, /* ID USER */ }) => {
    const response = await boardService.post("/createBoard", {
        game_id,
        challengers
    })

    return response.data
}

export const getBoard = async (id) => {
    const response = await boardService.post("/getBoard", {
        id
    })

    return response.data
}

export const updateBoard = async ({ id, challengersToDo, challengersDone }) => {
    const response = await boardService.post("/updateBoard", {
        id,
        challengersToDo,
        challengersDone
    })

    return response.data
}

export const updateCluesFreeBoard = async ({ id, cluesUsed }) => {
    const response = await boardService.post("/freeCluesUsed", {
        id,
        cluesUsed
    })
    return response.data
}
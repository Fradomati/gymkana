import { boardService } from "./Connections"

export const createBoard = async ({ game_id, challengers, /* ID USER */ }) => {
    const response = await boardService.post("/createBoard", {
        game_id,
        challengers
    })
    console.log("Response", response)

    return response.data
}
import { boardService } from './Connections'

export const createBoard = async ({ game_id, challengers, userID }) => {
  const response = await boardService.post('/createBoard', {
    game_id,
    challengers,
    userID,
  })

  return response.data
}

export const getBoard = async (id) => {
  const response = await boardService.post('/getBoard', {
    id,
  })

  return response.data
}

export const updateBoard = async ({ id, challengersToDo, challengersDone }) => {
  const response = await boardService.post('/updateBoard', {
    id,
    challengersToDo,
    challengersDone,
  })

  return response.data
}

export const updateCluesFreeBoard = async ({ id, cluesUsed }) => {
  const response = await boardService.post('/freeCluesUsed', {
    id,
    cluesUsed,
  })
  return response.data
}

export const endGameTime = async ({ id, endTime }) => {
  const response = await boardService.post('/endGameTime', {
    id,
    endTime,
  })
  return response.data
}

import { boardService, authService } from './Connections'

export const createBoard = async ({ game_id, challengers, user_id }) => {
  const responseBoard = await boardService.post('/createBoard', {
    game_id,
    challengers,
    user_id,
  })
  const responseUser = await authService.post('/addBoardToUser', {
    game_id,
    user_id,
  })
  console.log('Board', responseBoard.data, 'User', responseUser.data)
  return [responseBoard.data, responseUser.data]
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

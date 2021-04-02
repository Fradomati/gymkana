const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Board = require("../models/Boards_Model")

/** Create Board **/
router.post("/createBoard", async (req, res) => {
    const { game_id, challengers } = req.body

    // Antes de crear el tablero deberé confirmar que el USER no lo tenga ya creado
    // Para ello debo buscar entre los Boards del usuarios y ver que ninguno tenga el ID del Game
    // Ahora simplemete crearé el tablero.

    const newBoard = await Board.create({
        game: game_id,
        challengersToDo: challengers
    })

    newBoard ? res.json({ status: 200, newBoard }) : res.json({ status: 500, message: "No se ha podido crear el tablero" })
})

/** Get a Board **/

router.post("/getBoard", async (req, res) => {
    const { id } = req.body
    const boardFound = await Board.findById({ _id: id })
    boardFound ? res.json({ status: 200, boardFound }) : res.json({ status: 500, message: "No se ha encontrado el tablero" })
})

/** Update a Board **/
router.post("/updateBoard", async (req, res) => {
    const { id, challengersToDo, challengersDone } = req.body
    await Board.findByIdAndUpdate({
        _id: id
    },
        {
            challengersToDo: challengersToDo,
            challengersDone: challengersDone
        })

    const boardUpdated = await Board.findById({ _id: id })
    boardUpdated ? res.json({ status: 200, boardUpdated }) : res.json({ status: 500, message: "No se ha podido actualizar el tablero" })
})

/** Clues Free Used Update **/
router.post("/freeCluesUsed", async (req, res) => {
    const { id, cluesUsed } = req.body
    await Board.findByIdAndUpdate({
        _id: id
    }, {
        cluesUsed: cluesUsed
    })
    const boardUpdated = await Board.findById({ _id: id })
    boardUpdated ? res.json({ status: 200, boardUpdated }) : res.json({ status: 500, message: "No se ha podido actualizar el tablero" })

})


module.exports = router
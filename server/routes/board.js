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

module.exports = router
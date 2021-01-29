const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Game = require("../models/Game_Model")

router.post("/createGame", async (req, res) => {

    const { title, description, category, tags } = req.body

    const checkBD = await Game.findOne({
        title: title
    })

    if (checkBD == null) {
        const newGame = await Game.create({
            title,
            description,
            category,
            tags
        })
        console.log(`Nuevo juego creado ${newGame.title}`)
        res.json({ status: 200, newGame: newGame })
    } else {
        res.json({ status: 500, message: "Ya existe un juego con este nombre" })
    }
})

router.post("/addNewChallengertoGame", async (req, res) => {
    const { challenger_id, game_id } = req.body

    const addNewChallenger = await Game.findByIdAndUpdate(
        { _id: game_id },
        {
            $push: { challengers: challenger_id }
        })

    if (addNewChallenger) {
        res.json({ status: 200, addNewChallenger })
    } else {
        res.json({ status: 500, message: "Hubo un error al guardar la nueva prueba" })
    }
})

router.get("/findAll", async (req, res) => {

    await Game.find({}, (err, result) => {
        if (err) {
            res.json({ status: 500, message: "No hay contenido" })
        } else {
            res.json(result)
        }
    })

})


module.exports = router;
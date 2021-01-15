const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Game = require("../models/Game_Model")

router.post("/createGame", async (req, res) => {

    const { title, description, category, tags } = req.body

    await Game.find({}, (err) => {
        if (err) {
            const newGame = await Game.create({
                title,
                description,
                category,
                tags
            })
            console.log(`Nuevo juego creado ${newGame.title}`)
            res.json(newGame)
        } else {
            res.json({ status: 500, message: "Ya existe un juego con este nombre" })
        }
    })
})

module.exports = router;
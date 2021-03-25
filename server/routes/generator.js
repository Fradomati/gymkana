const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Game = require("../models/Game_Model")

/** To create a new Game **/

router.post("/createGame", async (req, res) => {

    const { title, description, share_url, category, tags } = req.body

    const checkBD = await Game.findOne({
        title: title
    })

    if (checkBD == null) {
        const newGame = await Game.create({
            title,
            description,
            category,
            share_url,
            tags
        })
        console.log(`Nuevo juego creado ${newGame.title}`)
        res.json({ status: 200, newGame: newGame })
    } else {
        res.json({ status: 500, message: "Ya existe un juego con este nombre" })
    }
})

/** Add new challenger **/

router.post("/addNewChallengertoGame", async (req, res) => {
    const { challenger_id, game_id } = req.body

    await Game.findByIdAndUpdate(
        { _id: game_id },
        {
            $push: { challengers: challenger_id }
        })
    const addNewChallenger = await Game.findById({
        _id: game_id
    })
    if (addNewChallenger) {
        res.json({ status: 200, addNewChallenger })
    } else {
        res.json({ status: 500, message: "Hubo un error al guardar la nueva prueba" })
    }
})

/** Pull all Challengers of a game **/

router.get("/findAll", async (req, res) => {

    await Game.find({}, (err, result) => {
        if (err) {
            res.json({ status: 500, message: "No hay contenido" })
        } else {
            res.json(result)
        }
    })

})

/** Get a Game by Share_url **/

router.get("/getGame/:share_url", async (req, res) => {
    const { share_url } = req.params
    const game = await Game.findOne({
        share_url
    })
    if (game == null) {
        res.json({ status: 500, message: "No existe este juego" })
    } else {
        res.json({ status: 200, game })
    }
})


/** To update a Challengers Positions of a Game **/

router.post("/updatePositionsOfChallengers", async (req, res) => {
    const { gameID, idsCGER } = req.body

    console.log("ACTUALIZACIÓN ----->", idsCGER)
    await Game.findByIdAndUpdate({ _id: gameID }, {
        challengers: idsCGER
    })

    const update = await Game.findById({ _id: gameID })

    console.log("ACTUALIZACIÓN 2 ---->", update)
    if (update) {
        res.json({ status: 200, update })
    } else {
        res.json({ status: 500, message: "No se pudo actualizar la posición de las pruebas" })
    }
})

// /**  Remove Challenger of a Game  **/

// router.post("/removeChallengerOfArray", async (req, res) => {
//     const { challenger_id, game_id } = req.body

//     const remove = await Game.findByIdAndUpdate({})

//     const 
// })


module.exports = router;
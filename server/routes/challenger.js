const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Challenger = require("../models/Challegner_Model")


// Add new challenger to game or modify
router.post("/addChallenger", async (req, res) => {

    const { game_id, title, description, urls, images, imagesEbb_IMG, freeClue, premiumClue, answer } = req.body

    const checkBD = await Challenger.findOne({
        title: title
    })

    if (checkBD == null) {
        const newChallenger = await Challenger.create({
            game_id,
            title,
            description,
            urls,
            images,
            images_Embed: imagesEbb_IMG,
            free_clues: freeClue,
            premium_clues: premiumClue,
            correct_response: answer
        })
        console.log(`Nuevo reto creado ${newChallenger.title}`)
        res.json({ status: 200, newChallenger: newChallenger })
    } else {
        res.json({ status: 500, message: "Ya existe un reto con este nombre" })
    }
})

// Get a specific challenger

router.post("/getChallenger", async (req, res) => {

    console.log(req.body)

    const { challenger_id } = req.body

    const challengerFound = await Challenger.findById({ _id: challenger_id })

    challengerFound
        ? res.json({ status: 200, challengerFound: challengerFound })
        : res.json({ status: 500, message: "No se ha encontrado la prueba" })
})

// router.get("/findAll", async (req, res) => {

//     await Game.find({}, (err, result) => {
//         if (err) {
//             res.json({ status: 500, message: "No hay contenido" })
//         } else {
//             res.json(result)
//         }
//     })

// })


module.exports = router;
const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Challenger = require("../models/Challegner_Model")

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
            imagesEbb_IMG,
            freeClue,
            premiumClue,
            answer
        })
        console.log(`Nuevo juego creado ${newChallenger.title}`)
        res.json({ status: 200, newChallenger: newChallenger })
    } else {
        res.json({ status: 500, message: "Ya existe un juego con este nombre" })
    }
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
const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Challenger = require("../models/Challegner_Model")


// Add new challenger to game or modify
router.post("/addChallenger", async (req, res) => {

    const { game_id, title, description, urls, images, imagesEbb, videosEbb, freeClue, premiumClue, answer } = req.body

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
            images_Embed: imagesEbb,
            video_Embed: videosEbb,
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

router.post("/modifyChallenger", async (req, res) => {

    const { title, description, urls, images, imagesEbb, videosEbb, freeClue, premiumClue, answer, idChallenger } = req.body


    const updatedChallenger = await Challenger.findByIdAndUpdate({ _id: idChallenger }, {
        title: title,
        description: description,
        urls: urls,
        images: images,
        images_Embed: imagesEbb,
        video_Embed: videosEbb,
        free_clues: freeClue,
        premium_clues: premiumClue,
        correct_response: answer
    })

    updatedChallenger
        ?
        res.json({ status: 200, newChallenger: updatedChallenger })
        :
        res.json({ status: 500, message: "Hay un error para actualizar este challenger" })

})



// Get a specific challenger

router.post("/getChallenger", async (req, res) => {

    const { challenger_id } = req.body

    const challengerFound = await Challenger.findById({ _id: challenger_id })

    challengerFound
        ? res.json({ status: 200, challengerFound: challengerFound })
        : res.json({ status: 500, message: "No se ha encontrado la prueba" })
})

router.post("/removeChallenger", async (req, res) => {
    const { challenger_id } = req.body

    const removedChallenger = await Challenger.findByIdAndRemove({ _id: challenger_id })

    removedChallenger
        ? res.json({ status: 200, challengerRemoved: removedChallenger })
        : res.json({ status: 500, message: "No se ha encontrado la prueba" })

})


module.exports = router;
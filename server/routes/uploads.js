const express = require("express");
const router = express.Router();
const _ = require("lodash")
const Image = require("../models/Image_Model")

router.post("/image", async (req, res) => {

    const { name, file } = req.body

    const checkBD = await Image.findOne({
        name: name
    })


    if (checkBD == null) {
        const newImage = await Image.create({
            name,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + file)),
                contentType: 'image/png'
            },

        })
        console.log(`Nueva imagen subida ${newImage.name}`)
        res.json({ status: 200, newImage: newImage })
    } else {
        res.json({ status: 500, message: "Ya existe un juego con este nombre" })
    }
})




module.exports = router;
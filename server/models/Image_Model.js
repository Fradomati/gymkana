const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ImageModel = new Schema(
    {
        name: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    },
    {
        timestamps: true,
    }
);
const Image = mongoose.model("Image", ImageModel);
module.exports = Image;
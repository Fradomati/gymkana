const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ChallengerModel = new Schema(
    {
        game_id: { type: Schema.Types.ObjectId, ref: "Game" },
        title: String,
        description: String,
        url: { type: Array },
        images: { type: Array },
        images_Embed: { type: Array },
        video_Embed: { type: Array },
        free_clues: { type: Array },
        premium_clues: { type: Array },
        correct_response: String

    },
    {
        timestamps: true,
    }
);
const Challenger = mongoose.model("Challenger", ChallengerModel);
module.exports = Challenger;
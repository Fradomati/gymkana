const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ChallengerModel = new Schema(
    {
        game_id: { type: Schema.Types.ObjectId, ref: "Game" },
        title: String,
        description: String,
        url: { type: Array, default: [] },
        images: { type: Array, default: [] },
        images_Embed: { type: Array, default: [] },
        video_Embed: { type: Array, default: [] },
        free_clues: { type: Array, default: [] },
        premium_clues: { type: Array, default: [] },
        correct_response: String

    },
    {
        timestamps: true,
    }
);
const Challenger = mongoose.model("Challenger", ChallengerModel);
module.exports = Challenger;
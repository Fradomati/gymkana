const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const GameModel = new Schema(
    {
        title: String,
        description: String,
        category: { type: Array },
        tags: { type: Array },
        ranking: [{ type: Schema.Types.ObjectId, ref: "User" }],
        challengers: [{ type: Schema.Types.ObjectId, ref: "Challenger" }],
        date: Date,
        share_url: String,

    },
    {
        timestamps: true,
    }
);
const Game = mongoose.model("Game", GameModel);
module.exports = Game;
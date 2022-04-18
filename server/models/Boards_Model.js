const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BoardsModel = new Schema(
  {
    boardId: { type: String },
    startTime: { type: Date, default: Date.now },
    endTime: {
      type: Object,
      default: { hours: null, minutes: null, seconds: null },
    },
    endGame: { type: Boolean, default: false },
    game: { type: Schema.Types.ObjectId, ref: 'Game' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    challengersToDo: [{ type: Schema.Types.ObjectId, ref: 'Challenger' }],
    challengersDone: [{ type: Schema.Types.ObjectId, ref: 'Challenger' }],
    cluesUsed: { type: Array, default: [] },
    cluesNoUsed: { type: Array, default: [] },
  },
  {
    timestamps: true,
  },
)
const Board = mongoose.model('Board', BoardsModel)
module.exports = Board

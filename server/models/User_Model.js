const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema(
  {
    username: String,
    password: String,
    email: String,
    age: String,
    gamesStarted: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    gamesFinished: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    gamesFailed: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    boardsStarted: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  },
)
const User = mongoose.model('User', UserModel)
module.exports = User

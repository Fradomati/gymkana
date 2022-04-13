const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema(
  {
    username: String,
    password: String,
    email: String,
    age: String,
    boardsStarted: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    boardsFinished: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    boardsFailed: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  },
)
const User = mongoose.model('User', UserModel)
module.exports = User

/* Esto puede estar mal planteado, el usuario no debería guardar los tableros, 
sino los juegos, que es lo que realmente le estoy pasando. El tablero es solo la plataforma sobre la que "juega" 
pero no el juego. Hay que revisar que esto se quede correcto "ref: 'Game'" */

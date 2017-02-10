const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
  username: String,
  content: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Chats', ChatSchema)

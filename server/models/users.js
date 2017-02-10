var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UsersSchema = new Schema({
  name: String,
  avatar: String,
  password: String
})

var users = mongoose.model('Users', UsersSchema)

module.exports = users

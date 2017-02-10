let Chats = require('../models/chatroom')

module.exports = {
  getChats: (req, res) => {
    Chats.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  createChats: (req, res) => {
    Chats.create({
      username: req.body.username,
      content: req.body.message
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  }
}

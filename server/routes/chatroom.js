var express = require('express')
var router = express.Router()
// let chatsController = require('../controller/chatroomController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

// router.get('/chats', chatsController.getChats)

module.exports = router

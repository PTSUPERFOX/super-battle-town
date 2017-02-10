var express = require('express')
var router = express.Router()
let chatsController = require('../controller/chatroomController')

router.get('/chats', chatsController.getChats)

module.exports = router

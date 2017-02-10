var express = require('express')
var router = express.Router()
let chatsController = require('../controller/chatroomController')

router.get('/', chatsController.getChats)

router.post('/send', chatsController.createChats)

router.post('/dummy', chatsController.createDummy)

module.exports = router

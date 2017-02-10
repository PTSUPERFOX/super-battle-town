var express = require('express')
var router = express.Router()
let chatsController = require('../controllers/chats')

/* GET home page. */
router.get('/chat', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router

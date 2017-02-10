var express = require('express');
var router = express.Router();
let userController = require('../controller/userController')

/* GET users listing. */
router.post('/', userController.register)
router.post('/login', userController.login)
router.get('/', userController.findAll)

module.exports = router;

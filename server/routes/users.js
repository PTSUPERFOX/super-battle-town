var express = require('express');
var router = express.Router();
let userController = require('../controller/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', userController.register)
router.post('/login', userController.login)
router.get('/', userController.findAll)

module.exports = router;

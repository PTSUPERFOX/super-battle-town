var users = require('../models/users.js')
var hash = require('password-hash')

let userController = {
  register : function(req, res){
    let data = {
      name : req.body.name,
      password: hash.generate(req.body.password),
      avatar: req.body.avatar
    }
    let newusers = users(data)
    newusers.save(function(err){
      if(err) throw err;
      res.send({
        msg: 'user Created!',
        user: newusers
      })
    })
  },
  findAll: function(req, res){
    users.find({}, function(err, users){
      if (err) throw err;
      res.json(users)
    })
  },
  login: function(req, res){
    let name = req.body.name
    let password = req.body.password
    users.findOne({name: name}).then(function(user){
      if (hash.verify(password, user.password)){
        res.send(user)
      } else {
        res.send('username salah');
      }
    })
  }
}
module.exports = userController

var users = require('../models/users.js')

let userController = {
  register : function(req, res){
    let data = {
      name : req.body.name,
      password: req.body.password,
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
      console.log(user);
    })
  }
}
module.exports = userController

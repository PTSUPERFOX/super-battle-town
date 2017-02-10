var users = require('../models/users.js');
var hash = require('password-hash');
var coordinate = require('../public/helpers/position');

let userController = {
  register : function(req, res){
    console.log(req.body);
    let data = {
      name : req.body.name,
      password: hash.generate(req.body.password),
      avatar: req.body.avatar
    }
    console.log(data);
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
    console.log("masuk login controller");
    console.log(req.body);
    let name = req.body.name
    let password = req.body.password
    users.findOne({name: name}).then(function(user){
      if (hash.verify(password, user.password)){
        res.send({ name: user.name, avatar: user.avatar, coordinate: coordinate() })
      } else {
        res.send('username or password incorrect');
      }
    })
  }
}
module.exports = userController

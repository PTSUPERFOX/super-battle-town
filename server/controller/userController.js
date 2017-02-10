var users = require('../models/users.js')

let itemController = {
  create : function(req, res){
    let data = {
      name : req.body.name,
      picture : req.file.originalname,
      stock: req.body.stock,
      price: req.body.price
    }
    let newusers = users(data)
    newusers.save(function(err){
      if(err) throw err;
      res.send({
        msg: 'item Created!',
        item: newusers
      })
    })
  },
  findAll: function(req, res){
    users.find({}, function(err, users){
      if (err) throw err;
      res.json(users)
    })
  }
}
module.exports = itemController

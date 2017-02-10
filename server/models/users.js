var items = require('../models/item.js')

let itemController = {
  create : function(req, res){
    let data = {
      name : req.body.name,
      picture : req.file.originalname,
      stock: req.body.stock,
      price: req.body.price
    }
    let newitems = items(data)
    newitems.save(function(err){
      if(err) throw err;
      res.send({
        msg: 'item Created!',
        item: newitems
      })
    })
  },
  findAll: function(req, res){
    items.find({}, function(err, items){
      if (err) throw err;
      res.json(items)
    })
  }
}
module.exports = itemController

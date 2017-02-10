let Chats = require('../models/chatroom')

module.exports = {
  getChats: (req, res) => {
    Chats.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  createChats: (req, res) => {
    console.log('ada ', message)
    // Chats.create({
    //   username: req.body.username,
    //   content: req.body.content
    // }).then(function (data) {
    //   res.send(data)
    // }).catch(function (err) {
    //   res.send(err)
    // })
    // let carts = JSON.parse(req.body.carts)
    // for (let i = 0; i < carts.length; i++) {
    //   Items.findOneAndUpdate({
    //     _id: carts[i].id
    //   }, {$set: {stock: (carts[i].stock) - (carts[i].qty)}}).then(function (data) {
    //     res.json(data)
    //   }).catch(function (err) {
    //     res.json(err)
    //   })
    // }
  },
  createDummy: (req, res) => {
    Chats.create({
      username: req.body.username,
      content: req.body.content
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  }
  // deleteItem: (req, res) => {
  //   Items.findOneAndRemove({itemid: req.params.itemid}).then(function (data) {
  //     res.send(`Deleted Item with ItemID: ${req.params.itemid}`)
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
  // updateItem: (req, res) => {
  //   Items.findOneAndUpdate({itemid: req.params.itemid}, req.body, {new: true}).then(function (data) {
  //     res.json(data)
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
  // checkout: (req, res) => {
  //   let carts = JSON.parse(req.body.carts)
  //   for (let i = 0; i < carts.length; i++) {
  //     Items.findOneAndUpdate({
  //       _id: carts[i].id
  //     }, {$set: {stock: (carts[i].stock) - (carts[i].qty)}}).then(function (data) {
  //       res.json(data)
  //     }).catch(function (err) {
  //       res.json(err)
  //     })
  //   }
  // }
}

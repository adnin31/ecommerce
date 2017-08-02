let data = require("../models/items")
const ObjectId = require('mongodb').ObjectId


function viewAll(req,res){
  data.find({},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.status(500).send(err)
    }
  })
}

function insert(req,res){
  let itemIn = new data({
    category : req.body.category,
    merk : req.body.merk,
    item_name : req.body.item_name,
    image : req.body.image,
    stock : req.body.stock,
    price:req.body.price
  })
  itemIn.save((err,itemData)=>{
    if(!err){
      res.send(itemData)
    }else {
      res.status(500).send(err)
    }
  })
}

function updateItem(req,res){
  data.update({
    _id : req.params.id
  },{
    $set :{
      category : req.body.category || data.category,
      merk : req.body.merk||data.merk,
      item_name : req.body.item_name||data.item_name,
      image : req.body.image||data.image,
      stock : req.body.stock||data.stock,
      price :req.body.price ||data.price
    }
  },(err,data)=>{
    if (!err) {
      res.send(data)
    }else {
      res.send(err)
    }
  })

}
function deleteItems(req,res) {
  data.remove({_id:req.params.id},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

module.exports = {viewAll, insert ,updateItem,deleteItems};

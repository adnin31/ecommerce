var mongoose = require('mongoose')

var gadgetSchema = new mongoose.Schema({
  category :{
    type : String,
    required :true
  } ,
  merk : {
    type : String,
    required :true
  },
  item_name : {
    type : String,
    required :true
  },
  image :{
    type :String,
    required :true
  },
  stock : {
    type : Number,
    required :true
  },
  price :{
    type : Number,
    required :true
  }
})

var Items = mongoose.model('Item',gadgetSchema)

module.exports = Items;

const mongoose = require("mongoose");
const {Schema}= mongoose;


const orderSchema = new Schema({
 userId:{
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:"User"
 },
 totalPrice:{
     type:Number, 
     required:true
 },
 products:[
     {
         productId:mongoose.Schema.Types.ObjectId,
         quantity:Number
     }
 ]
})

  module.exports = mongoose.model('Order',orderSchema);
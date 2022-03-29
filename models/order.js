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
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
     },
     quantity:{type:Number}
     
}

 ]
})

  module.exports = mongoose.model('Order',orderSchema);
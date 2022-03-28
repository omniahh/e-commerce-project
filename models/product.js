const mongoose = require("mongoose");
const {Schema}= mongoose;


const productSchema = new Schema({
    name:{
        type:String, 
        required:true
    },
    quantity:{
        type:Number ,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String ,
        required:true
    },
    image:{
        type:String,
        
    }
})


  
  module.exports = mongoose.model('Product',productSchema);
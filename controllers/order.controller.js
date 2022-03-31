
const OrderModel= require('../models/order')
const checkout=
(req,res,next)=>
{
    const {totalPrice , products} = req.body;
    console.log(products);
    const order = new OrderModel({userId:req.userId,totalPrice , products}).save();
    order.then(data=>{
        res.status(200).json({status:"success",data});
    })
    .catch(err=>{
        res.status(403).json({status:"fail",errorMessage:err.message});
    })
}
const getAllOrders =
async(req,res,next)=>
{
 const orders=await OrderModel.find({}).populate('products.productId',['name','price']).populate('userId',['fname','lname','email'])
 res.status(200).json({status:"success",data:orders})
}
const getOrderById=
async(req,res,next)=>
{
    const {id} = req.params;
    const order = await OrderModel.findById(id).populate('products.productId',['name','price']).populate('userId',['fname','lname','email'])
    res.status(200).json({status:"success",data:order});
}
const getOrdersByUserId = 
async(req,res,next)=>
{
const usersOrder = await OrderModel.find({userId:req.userId});
res.status(200).json({data:usersOrder});
}


module.exports={checkout,getAllOrders,getOrderById,getOrdersByUserId}
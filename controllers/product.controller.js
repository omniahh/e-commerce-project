const ProductModel =require('../models/product')
const addProduct=
(req,res,next)=>
{
const {name , quantity , price , image , category }=req.body;
const newProduct =  new ProductModel({name , quantity , price , image , category}).save();
newProduct.then(data=>{
res.status(200).json({status:'success', data})
})
.catch(err=>{
    res.status(500).json({status:"fail",errorMessage : err.message});
})


}

const deleteProduct=
async(req,res,next)=>
{
    const {productId} =req.body;
    const acknowledge  = await ProductModel.deleteOne({_id:productId})
   res.json({data:acknowledge});
}

const updateUser=
async (req,res,next)=>
{
    const {name , quantity , price , image , category }=req.body;
    const acknowledge = await ProductModel.updateOne({name , quantity , price , image , category});
    res.json({data:acknowledge});
}



module.exports={addProduct,deleteProduct,updateUser}
module.exports=(err,req,res,next)=>{
    res.json({status:"failed",message:err.message})
}
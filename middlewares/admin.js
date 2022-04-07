const jwt=require('jsonwebtoken')
const config= require('../config/auth.config')
const UserModel = require('../models/user.model');
const { isAdmin } = require('./authJwt');
const isAuthenticated=
async(req,res,next)=>
{
const {token}=req.body;
const {id} = jwt.verify(token,config.secret)
console.log(id)
if(!id)
{
    return res.status(403).send({ message: "invalid token!" });
}
const user= await UserModel.findById(id);
console.log(user.isAdmin)
if(user.isAdmin===false)
{
return res.status(403).send({ message: "admin role invalid!" });
}
req.userId = id;
next();
}






module.exports={isAuthenticated}
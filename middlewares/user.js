const jwt = require('jsonwebtoken');
const config=require('../config/auth.config')
const isAuthenticated=
(req,res,next)=>
{
const {token} = req.body;
const {id}= jwt.verify(token,config.secret);
if(!id)
{
res.staus(403).json({status:"fail",err:"token not valid"});
}
req.userId=id;
next()
}


module.exports={isAuthenticated}
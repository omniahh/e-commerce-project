// exports.allAccess = (req, res) => {
//     res.status(200).send("Public Content.");
//   };
//   exports.userBoard = (req, res) => {
//     res.status(200).send("User Content.");
//   };
//   exports.adminBoard = (req, res) => {
//     res.status(200).send("Admin Content.");
//   };


const UserModel = require('../models/user.model')
const _ = require('lodash');
const getUserData =
async(req,res,next)=>
{
 const user = await UserModel.findById(req.userId);
 res.status(200).json({data:_.omit(user.toObject(),['password','isAdmin'])})
}


module.exports = {
  getUserData
}
const config = require("../config/auth.config"); /////....
const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const _=require('lodash')


exports.signup = async(req, res) => {

  // const user = new User({
  //   fname: req.body.fname,
  //   lname: req.body.lname,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 8),
  // });
  // user.save((err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }
  //   if (req.body.roles) {
  //     Role.find(
  //       {
  //         name: { $in: req.body.roles },
  //       },
  //       (err, roles) => {
  //         if (err) {
  //           res.status(500).send({ message: err });
  //           return;
  //         }
  //         user.roles = roles.map((role) => role._id);
  //         user.save((err) => {
  //           if (err) {
  //             res.status(500).send({ message: err });
  //             return;
  //           }
  //           res.send({ message: "User was registered successfully!" });
  //         });
  //       }
  //     );
  //   } else {
  //     Role.findOne({ name: "user" }, (err, role) => {
  //       if (err) {
  //         res.status(500).send({ message: err });
  //         return;
  //       }
  //       user.roles = [role._id];
  //       user.save((err) => {
  //         if (err) {
  //           res.status(500).send({ message: err });
  //           return;
  //         }
  //         res.send({ message: "User was registered successfully!" });
  //       });
  //     });
  //   }
  // });

  //added by mustafa

  const {fname , lname , email , password} = req.body;
  const user = new User({fname , lname , email , password:bcrypt.hashSync(password, 8)});
  const  newUser = user.save()
  .then(data=>{
    console.log(data);
    res.send({ message: "User was registered successfully!" });
    })
  .catch(err=>{
    res.status(500).send({ message: err.message });})
  
};

exports.signin = async (req, res) => {
  // User.findOne({
  //   username: req.body.username,
  // })
  //   .populate("roles", "-__v")
  //   .exec((err, user) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }
  //     if (!user) {
  //       return res.status(404).send({ message: "User Not found." });
  //     }
  //     var passwordIsValid = bcrypt.compareSync(
  //       req.body.password,
  //       user.password
  //     );
  //     if (!passwordIsValid) {
  //       return res.status(401).send({ message: "Invalid Password!" });
  //     }
  //     var token = jwt.sign({ id: user.id }, config.secret, {
  //       expiresIn: 86400, // 24 hours
  //     });
  //     var authorities = [];
  //     for (let i = 0; i < user.roles.length; i++) {
  //       authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  //     }
  //     req.session.token = token;
  //     res.status(200).send({
  //       id: user._id,
  //      fname: user.fname,
  //      lname: user.lname,
  //       email: user.email,
  //       roles: authorities,
  //     });
  //   });

  //added by mustafa
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }
  //if user exists
  //compare password
  console.log(password, user.password, user)
  var passwordIsValid = bcrypt.compareSync(password, user.password);
  console.log(passwordIsValid)
  if (!passwordIsValid) {
    return res.status(401).send({ message: "Invalid Password!" });
  }
  //if password and email match
  //generate jwt token
  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });

      res.status(200).send({
        id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        isAdmin: user.isAdmin,
        token:token 
      });


};
exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};

// const { authJwt } = require("../middlewares");
// const controller = require("../controllers/user.controller");
// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, Content-Type, Accept"
//     );
//     next();
//   });
//   app.get("/api/test/all", controller.allAccess);
//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);


//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );

// };

const express = require('express');
const router = express.Router();
const {getUserData} = require('../controllers/user.controller');
const {isAuthenticated} = require('../middlewares/user')

router.post('/getUserData',isAuthenticated,getUserData)

module.exports= router;
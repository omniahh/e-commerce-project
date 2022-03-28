const express = require('express');
const router = express.Router();
const {checkout}=require('../controllers/order.controller')
const {isAuthenticated} = require('../middlewares/user')
router.post("/checkout",isAuthenticated,checkout)


module.exports = router;
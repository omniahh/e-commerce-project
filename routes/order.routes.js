const express = require('express');
const router = express.Router();
const {checkout,getAllOrders}=require('../controllers/order.controller')
const {isAuthenticated} = require('../middlewares/user')
router.post("/checkout",isAuthenticated,checkout)
router.get("/getAllOrders",getAllOrders)


module.exports = router;
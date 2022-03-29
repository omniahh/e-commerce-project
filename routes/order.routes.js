const express = require('express');
const router = express.Router();
const {checkout,getAllOrders,getOrderById}=require('../controllers/order.controller')
const {isAuthenticated} = require('../middlewares/user')
router.post("/checkout",isAuthenticated,checkout)
router.get("/getAllOrders",getAllOrders)
router.get("/getOrderById/:id",getOrderById)


module.exports = router;
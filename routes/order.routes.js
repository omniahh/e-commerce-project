const express = require('express');
const router = express.Router();
const {checkout,getAllOrders,getOrderById,getOrdersByUserId}=require('../controllers/order.controller')
const {isAuthenticated} = require('../middlewares/user')
router.post("/checkout",isAuthenticated,checkout)
router.get("/getAllOrders",getAllOrders)
router.get("/getOrderById/:id",getOrderById)
router.post("/getOrdersByUserId",isAuthenticated,getOrdersByUserId)


module.exports = router;
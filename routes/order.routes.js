const express = require('express');
const router = express.Router();
const {checkout,getAllOrders,getOrderById,getOrdersByUserId,deleteOrder}=require('../controllers/order.controller')
const {isAuthenticated} = require('../middlewares/user')
router.post("/checkout",isAuthenticated,checkout)
router.get("/getAllOrders",getAllOrders)
router.get("/getOrderById/:id",getOrderById)
router.post("/getOrdersByUserId",isAuthenticated,getOrdersByUserId)
router.delete("/deleteOrder",isAuthenticated,deleteOrder);


module.exports = router;
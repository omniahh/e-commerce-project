const express = require('express');
const router=express.Router();
const {addProduct,deleteProduct,updateUser} = require('../controllers/product.controller')
const {isAuthenticated,} = require('../middlewares/admin')

router.post("/addProduct",isAuthenticated,addProduct);
router.post("/deleteProduct",isAuthenticated,deleteProduct);
router.post("/updateProduct",isAuthenticated,updateUser);


module.exports=router;
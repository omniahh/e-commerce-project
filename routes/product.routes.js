const express = require('express');
const router=express.Router();
const {addProduct,deleteProduct,updateProduct,get_all_products} = require('../controllers/product.controller')
const {isAuthenticated,} = require('../middlewares/admin')

router.post("/addProduct",isAuthenticated,addProduct);
router.post("/deleteProduct",isAuthenticated,deleteProduct);
router.post("/updateProduct",isAuthenticated,updateProduct);
router.get("/getAllProducts",get_all_products);


module.exports=router;
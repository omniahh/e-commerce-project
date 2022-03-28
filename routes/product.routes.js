const express = require('express');
const router=express.Router();
const {addProduct,deleteProduct,updateProduct,get_all_products,getProductById} = require('../controllers/product.controller')
const {isAuthenticated,} = require('../middlewares/admin')

router.post("/addProduct",isAuthenticated,addProduct);
router.post("/deleteProduct",isAuthenticated,deleteProduct);
router.post("/updateProduct",isAuthenticated,updateProduct);
router.get("/getAllProducts",get_all_products);
router.get("/getProductById/:id",getProductById);


module.exports=router;
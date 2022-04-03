const express = require('express');
const router=express.Router();
const {addProduct,deleteProduct,updateProduct,get_all_products,getProductById,getProductByCategory} = require('../controllers/product.controller')
const {isAuthenticated,} = require('../middlewares/admin')

router.post("/addProduct",isAuthenticated,addProduct);
router.delete("/deleteProduct",isAuthenticated,deleteProduct);
router.patch("/updateProduct",isAuthenticated,updateProduct);
router.get("/getAllProducts",get_all_products);
router.get("/getProductById/:id",getProductById);
router.get("/getProductByCategory/:categoryName",getProductByCategory);


module.exports=router;
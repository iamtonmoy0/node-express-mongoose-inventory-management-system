const express=require('express');
const Product = require('../../controllers/product.controller');
const router =express.Router();

router.route('/')
 .get(Product.getProduct)
 .post(Product.addProduct)

 router.route('/:id')
 .get(Product.getProductById)
 .patch(Product.updateProduct)


module.exports=router;
const express=require('express');
const Product = require('../../controllers/product.controller');
const router =express.Router();

router.get('/',Product.getProduct);
router.get('/:id',Product.getProductById);
router.post('/',Product.addProduct);


module.exports=router;
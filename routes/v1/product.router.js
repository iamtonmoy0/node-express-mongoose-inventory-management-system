const express=require('express');
const Product = require('../../controllers/product.controller');
const router =express.Router();

router.route('/bulk-action')
 .patch(Product.bulkProductUpdate)
 .delete(Product.bulkProductDelete)

router.route('/')
 .get(Product.getProduct)
 .post(Product.addProduct)

 router.route('/:id')
 .get(Product.getProductById)
 .patch(Product.updateProduct)
 .delete(Product.deleteProductById)


module.exports=router;
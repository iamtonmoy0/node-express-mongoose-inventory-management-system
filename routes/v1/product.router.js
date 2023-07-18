const express=require('express');
const Product = require('../../controllers/product.controller');
const uploader = require('../../middleware/uploader');
const router =express.Router();
const auth=require('../../middleware/auth');
const verifyToken = require('../../middleware/verifyToken');

router.route('/file-upload').post(uploader.array('image'),Product.fileUpload)
router.route('/bulk-action')
 .patch(Product.bulkProductUpdate)
 .delete(Product.bulkProductDelete)

router.route('/')
 .get(Product.getProduct)
 .post(verifyToken,auth("admin"),Product.addProduct) //need to pass verify token and auth middle ware 

 router.route('/:id')
 .get(Product.getProductById)
 .patch(Product.updateProduct)
 .delete(Product.deleteProductById)


module.exports=router;
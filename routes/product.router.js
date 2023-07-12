const express=require('express');
const addProduct = require('../controllers/product.controller');
const router =express.Router();

router.post('/',addProduct);

module.exports=router;
const productSchema = require("../model/product.model");
const mongoose=require('mongoose');

//schema model 
const Product=mongoose.model('product',productSchema)

const addProduct=(req,res,next)=>{
  console.log(req.body)
  const product= new Product(req.body);
  product.save();
  res.send('working')
}

module.exports=addProduct;
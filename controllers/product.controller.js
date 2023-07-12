const productSchema = require("../model/product.model");
const mongoose=require('mongoose');

//schema model 
const Product=mongoose.model('product',productSchema)

const addProduct=async(req,res,next)=>{
	try {
	const product= new Product(req.body);
	const result=await product.save();
	res.status(200).json({
		status:"success",
		message:"Data inserted successfully",
		data:result
	})
	// next();
	} catch (error) {
	res.status(400).json({
		status:'fail',
		message:"Data is not inserted",
		error:error.message
	})
		
	}
 
}

module.exports=addProduct;
const productSchema = require("../model/product.model");
const mongoose=require('mongoose');

//schema model 
const Product=mongoose.model('product',productSchema)
// get product
const getProduct=async(req,res,next)=>{
	try {
		const product =await Product.find({})
		res.status(200).json({
			status:"success",
			message:"Data found",
			data:product
		})
		
	} catch (error) {
		res.status(400).json({
			status:"fail",
			message:"can't get the data",
			error:error.message,
		})
	}

}
//add product
const addProduct=async(req,res,next)=>{
	try {
	//can use create method instead of save
	const product= new Product(req.body);
	const result=await product.save();
	res.status(200).json({
		status:"success",
		message:"Data inserted successfully",
		data:result
	})
	} catch (error) {
	res.status(400).json({
		status:'fail',
		message:"Data is not inserted",
		error:error.message
	})
		
	}
 
}
module.exports={addProduct,getProduct,};
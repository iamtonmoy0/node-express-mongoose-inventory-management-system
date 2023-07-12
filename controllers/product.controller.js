const { getProductServices, getProductByIdServices, createProductServices } = require("../services/product.services")

 
// get product
const getProduct=async(req,res,next)=>{
	try {
		const product = await getProductServices();
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
// get product by id
const getProductById=async(req,res,next)=>{
	try {
		const product =await getProductByIdServices(req.params.id);
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
	const product= await createProductServices(req.body);
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
module.exports={addProduct,getProduct,getProductById};
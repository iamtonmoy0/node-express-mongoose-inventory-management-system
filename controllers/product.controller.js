const { getProductServices, getProductByIdServices, createProductServices, updateProductServices, bulkUpdateProductServices, deleteProductByIdServices, bulkDeleteProductServices } = require("../services/product.services")

 
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

// update product
const updateProduct=async(req,res,next)=>{
	try {
		const result =await updateProductServices(req.params.id,req.body);
		res.status(200).json({
			status:"success",
			message:"Product update successful",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
		status:'fail',
		message:"Data update failed",
		error:error.message
	})
		
	}

}
//bulk update
const bulkProductUpdate=async(req,res,next)=>{
try {
	const result=await bulkUpdateProductServices(req.body);
		res.status(200).json({
			status:"success",
			message:"Multiple product update successful",
			data:result
		})

} catch (error) {
		res.status(400).json({
		status:'fail',
		message:"Multiple product data update failed",
		error:error.message
	})
}
}
// delete product
const deleteProductById=async(req,res,next)=>{
	try {
	const result=await deleteProductByIdServices(req.params.id)
	if(!result.deletedCount){
		res.status(400).json({
			status:"fail",
			error:"cant delete the product"
		})
	}
		res.status(200).json({
			status:"success",
			message:"Product delete successful",
			data:result
		})

} catch (error) {
		res.status(400).json({
		status:'fail',
		message:" product data delete failed",
		error:error.message
		})
}	

}
// bulk delete
const bulkProductDelete=async(req,res,next)=>{
try {
	const result=await bulkDeleteProductServices(req.body.ids);
	if(!result.deletedCount){
		res.status(400).json({
			status:"fail",
			error:"cant delete the product"
		})
	}
		res.status(200).json({
			status:"success",
			message:"Multiple product delete successful",
			data:result
		})

} catch (error) {
		res.status(400).json({
		status:'fail',
		message:"Multiple product data delete failed",
		error:error.message
	})
}

}
module.exports={addProduct,getProduct,getProductById,updateProduct,bulkProductUpdate,deleteProductById,bulkProductDelete};
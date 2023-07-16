const { createCategoryService, getCategoryServices, getCategoryByIdServices, deleteCategoryByIdServices, updateCategoryByIdServices } = require("../services/category.services")

exports.createCategory=async(req,res,next)=>{
	try {
		const result=await createCategoryService(req.body);
		res.status(200).json({
			status:"success",
			message:"Successfully created the category",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not create the category"
		})
		
	}
}
exports.getCategory=async(req,res,next)=>{
	try {
		const result =await getCategoryServices(req.body);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the category"
		})
	}
}
exports.getCategoryById=async(req,res,next)=>{
	try {
		const result =await getCategoryByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Category with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the category"
		})
	}

}
exports.deleteCategoryById=async(req,res,next)=>{
	try {
		const result =await deleteCategoryByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Category with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'Category  deleted successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not delete the category"
		})
	}

}
exports.updateCategoryById=async(req,res,next)=>{
	try {
		const result =await updateCategoryByIdServices(req.params.id,req.body);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Category with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'Category  update successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not update the category"
		})
	}

}
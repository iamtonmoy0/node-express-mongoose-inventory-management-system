const { createBrandService, getBrandServices, getBrandByIdServices, deleteBrandByIdServices, updateBrandByIdServices } = require("../services/brand.services")

exports.createBrand=async(req,res,next)=>{
	try {
		const result=await createBrandService(req.body);
		res.status(200).json({
			status:"success",
			message:"Successfully created the brand",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not create the brand"
		})
		
	}
}
exports.getBrands=async(req,res,next)=>{
	try {
		const result =await getBrandServices();
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the brand"
		})
	}
}
exports.getBrandById=async(req,res,next)=>{
	try {
		const result =await getBrandByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Brand with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the brand"
		})
	}

}
exports.deleteBrandById=async(req,res,next)=>{
	try {
		const result =await deleteBrandByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Brand with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'Brand  deleted successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not delete the brand"
		})
	}

}
exports.updateBrandById=async(req,res,next)=>{
	try {
		const result =await updateBrandByIdServices(req.params.id,req.body);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Brand with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'Brand  update successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not update the brand"
		})
	}

}
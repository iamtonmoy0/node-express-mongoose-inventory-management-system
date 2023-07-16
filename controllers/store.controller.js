const { createStoreService, getStoreServices, getStoreByIdServices, deleteStoreByIdServices, updateStoreByIdServices } = require("../services/store.services")

exports.createStore=async(req,res,next)=>{
	try {
		const result=await createStoreService(req.body);
		res.status(200).json({
			status:"success",
			message:"Successfully created the store",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not create the store"
		})
		
	}
}
exports.getStores=async(req,res,next)=>{
	try {
		const result =await getStoreServices(req.body);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the store"
		})
	}
}
exports.getStoreById=async(req,res,next)=>{
	try {
		const result =await getStoreByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'store with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the store"
		})
	}

}
exports.deleteStoreById=async(req,res,next)=>{
	try {
		const result =await deleteStoreByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'store with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'store  deleted successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not delete the store"
		})
	}

}
exports.updateStoreById=async(req,res,next)=>{
	try {
		const result =await updateStoreByIdServices(req.params.id,req.body);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'store with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'store  update successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not update the store"
		})
	}

}
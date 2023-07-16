const { createStockService, getStockServices, getStockByIdServices, deleteStockByIdServices, updateStockByIdServices } = require("../services/stock.services")

exports.createStock=async(req,res,next)=>{
	try {
		const result=await createStockService(req.body);
		res.status(200).json({
			status:"success",
			message:"Successfully created the stock",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not create the stock"
		})
		
	}
}
exports.getStocks=async(req,res,next)=>{
	try {
		const result =await getStockServices(req.body);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the stock"
		})
	}
}
exports.getStockById=async(req,res,next)=>{
	try {
		const result =await getStockByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Stock with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not get the stock"
		})
	}

}
exports.deleteStockById=async(req,res,next)=>{
	try {
		const result =await deleteStockByIdServices(req.params.id);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Stock with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'Stock  deleted successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not delete the stock"
		})
	}

}
exports.updateStockById=async(req,res,next)=>{
	try {
		const result =await updateStockByIdServices(req.params.id,req.body);
		if(!result){
			res.status(400).json({
				status:'fail',
				message:'Stock with this id dose not exist '
			})
		}
		res.status(200).json({
			status:"success",
			message:'Stock  update successful',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			error:"could not update the stock"
		})
	}

}
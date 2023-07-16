const Stock=require('../model/stock.model')

exports.createStockService=async(data)=>{
	const result=await Stock.create(data);
	return result;

}
exports.getStockServices=async(data)=>{
	const result=await Stock.find({})
	return result;
}
exports.getStockByIdServices=async(id)=>{
	const result=await Stock.findById(id);
	return result;
}
exports.deleteStockByIdServices=async(id)=>{
	const result=await Stock.deleteOne({_id:id});
	return result;
}
exports.updateStockByIdServices=async(id,data)=>{
	const result=await Stock.updateOne({_id:id},{$set:data},{runValidators:true});
	return result;
}
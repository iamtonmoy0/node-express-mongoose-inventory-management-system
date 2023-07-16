const Store=require('../model/store.model')

exports.createStoreService=async(data)=>{
	const result=await Store.create(data);
	return result;

}
exports.getStoreServices=async(data)=>{
	const result=await Store.find({})
	return result;
}
exports.getStoreByIdServices=async(id)=>{
	const result=await Store.findById(id);
	return result;
}
exports.deleteStoreByIdServices=async(id)=>{
	const result=await Store.deleteOne({_id:id});
	return result;
}
exports.updateStoreByIdServices=async(id,data)=>{
	const result=await Store.updateOne({_id:id},{$set:data},{runValidators:true});
	return result;
}
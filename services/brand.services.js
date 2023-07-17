const Brand=require('../model/brand.model')

exports.getBrandServices=async()=>{
	const result=await Brand.find({})
	 .populate('products')
	return result;
}

exports.createBrandService=async(data)=>{
	const result=await Brand.create(data);
	return result;

}
exports.getBrandByIdServices=async(id)=>{
	const result=await Brand.findById(id);
	return result;
}
exports.deleteBrandByIdServices=async(id)=>{
	const result=await Brand.deleteOne({_id:id});
	return result;
}
exports.updateBrandByIdServices=async(id,data)=>{
	const result=await Brand.updateOne({_id:id},{$set:data},{runValidators:true});
	return result;
}
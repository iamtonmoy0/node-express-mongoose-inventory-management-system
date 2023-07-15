const Brand=require('../model/brand.model')

exports.createBrandService=async(data)=>{
	const result=await Brand.create(data);
	return result;

}
exports.getBrandServices=async(data)=>{
	const result=await Brand.find({})
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
const Category=require('../model/category.model')

exports.createCategoryService=async(data)=>{
	const result=await Category.create(data);
	return result;

}
exports.getCategoryServices=async(data)=>{
	const result=await Category.find({})
	return result;
}
exports.getCategoryByIdServices=async(id)=>{
	const result=await Category.findById(id);
	return result;
}
exports.deleteCategoryByIdServices=async(id)=>{
	const result=await Category.deleteOne({_id:id});
	return result;
}
exports.updateCategoryByIdServices=async(id,data)=>{
	const result=await Category.updateOne({_id:id},{$set:data},{runValidators:true});
	return result;
}
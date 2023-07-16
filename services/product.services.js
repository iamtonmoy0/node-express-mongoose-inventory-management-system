const Product = require("../model/product.model");
const Brand=require("../model/brand.model")
//get all product
exports.getProductServices=async(filters,queries)=>{
	const products=await Product.find(filters)
	 .skip(queries.skip)
	 .limit(queries.limit)
	 .select(queries.fields)
	 .sort(queries.sortBy)
	const totalProduct=await Product.countDocuments(filters);
	const pageCount = Math.ceil(totalProduct / queries.limit);
	return {totalProduct,pageCount,products};
}
//get product by id
exports.getProductByIdServices=async(data)=>{
	const product=await Product.findById(data);
	return product;
}
//create product
exports.createProductServices=async(data)=>{
	const product =await Product.create(data);
	const {_id:productId,brand}=product;
   //update the brand products=> array
	const res=await Brand.updateOne({_id:brand.id},{$push:{products:productId}});
	// console.log(res)
	return product;

}
//update product query
exports.updateProductServices=async(productId,data)=>{
	const product=await Product.updateOne({_id:productId},{$set:data},{runValidators:true});
	return product;
}
//bulk update
exports.bulkUpdateProductServices=async(data)=>{
	const products=[];
	data.ids.forEach(product => {
		products.push(Product.updateOne({_id:product.id},product.data))
	});
	const result= await Promise.all(products);
	return result;
}
// delete product
exports.deleteProductByIdServices=async(id)=>{
	const result =await Product.deleteOne({_id:id});
	return result;
}
// bulk delete
exports.bulkDeleteProductServices=async(ids)=>{
	const result = await Product.deleteMany({_id:ids});
	return result;

}
const Product = require("../model/product.model");

exports.getProductServices=async()=>{
	const products=await Product.find({});
	return products;
}
exports.getProductByIdServices=async(data)=>{
	const product=await Product.findById(data);
	return product;
}
exports.createProductServices=async(data)=>{
	const product =new Product(data);
	return product;

}
//update product query
exports.updateProductServices=async(productId,data)=>{
	const product=await Product.updateOne({_id:productId},{$set:data});
	return product;
}
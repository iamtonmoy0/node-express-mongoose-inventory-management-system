const Product = require("../model/product.model");
//get all product
exports.getProductServices=async()=>{
	const products=await Product.find({});
	return products;
}
//get product by id
exports.getProductByIdServices=async(data)=>{
	const product=await Product.findById(data);
	return product;
}
//create product
exports.createProductServices=async(data)=>{
	const product =new Product(data);
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
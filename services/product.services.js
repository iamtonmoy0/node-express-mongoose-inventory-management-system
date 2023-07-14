const Product = require("../model/product.model");
//get all product
exports.getProductServices=async(filters,query)=>{
	const products=await Product.find(filters);
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
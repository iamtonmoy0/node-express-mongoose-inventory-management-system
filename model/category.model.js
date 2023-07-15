const mongoose=require('mongoose');
const validator=require('validator');
const {ObjectId}=mongoose.Schema.Types;

const Schema=mongoose.Schema;
//category schema model
const categorySchema=new Schema({
name:{
	type:String,
	trim:true,
	required:[true,'Please provide a category name'],
	lowercase:true,
	unique:true
},
description:String,
imageUrl:{
type:String,
validate:[validator.isURL,"Please provide a valid URL"]
}
},{
	timestamps:true
})

const Category =mongoose.model('category',categorySchema);

module.exports=Category;
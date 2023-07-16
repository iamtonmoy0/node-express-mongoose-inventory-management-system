const mongoose=require('mongoose');
const validator=require('validator');
const {ObjectId}=mongoose.Schema.Types;

const Schema=mongoose.Schema;
//store schema model
const storeSchema=new Schema({
name:{
	type:String,
	trim:true,
	required:[true,'Please provide a store name'],
	unique:true,
	lowercase:true
	
},
description:String,
status:{
	type:String,
	enum:["Open","Closed"],
	default:"Open"
},
manager:{
	name:String,
	contactNumber:String,
	id:ObjectId,
	// ref:'User'
}
},
{
	timestamps:true
})

const Store =mongoose.model('store',storeSchema);

module.exports=Store;
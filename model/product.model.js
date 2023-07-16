const mongoose = require("mongoose");

const {ObjectId}=mongoose.Schema.Types;

const Schema = mongoose.Schema;
// TODO: some model is commented out for development purpose

//product schema design 
const productSchema=new Schema({
  name:{
    type:String,
    required:[true,"please provide a name for this product"],
    trim:true,
    lowercase:true,
    unique:[true,"name must be unique"],
    minLength:[3,"name must be at least 3 character"],
    maxLength:[20]
  },
  description:{
    type:String,
    required:true,
  },
  // price:{
  //   type:Number,
  //   required:true,
  //   min:[0,"price can't be negative"],
  // },
  unit:{
    type:String,
    required:true,
    enum:{
      values:["kg","litre","pcs","bag"],
      message:"unit value can't be {value}.must be kg/litre/pcs/bag"
    }
  },
  // imageUrls:{
  //   type:String,
  //   required:true,
  //   validate:{
  //     validator:(value)=>{
  //       if(!Array.isArray(value)){
  //         return false;
  //       };
  //       let isValid=true;
  //       value.forEach(url=>{
  //         if(validator.isURL(url)){
  //           isValid= false
  //         }
  //       });
  //       return isValid;
  //     },
  //     message:"Please provide a valid image url"
  //   }

  // },
  // quantity:{
  //     type:Number,
  //     required:true,
  //     min:[0,"quantity can't be 0"],
  //     validate:{
  //       validator:(value)=>{
  //         const isInteger=Number.isInteger(value);
  //         if(isInteger){
  //           return true
  //         }else{
  //           return false
  //         }
  //       }
  //     },
  //     message:"quantity must be an integer"
  //   },
  
  // status:{
  //   type:String,
  //   required:true,
  //   enum:{
  //     values:["in-stock","out-of-stock","discontinued"],
  //     message:"status can't be value"
  //     },
  // },
  createdAt:{
    type:Date,
    default:Date.now,
  },
  updatedAt:{
    type:Date,
    default:Date.now,
  },
  supplier:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"supplier"
  },
  category:[{
    name:{
    type:String,
    // required:true,
  },
  _id:mongoose.Schema.Types.ObjectId,
}],
brand:{
  name:{
    type:String,
    required:true
  },
  id:{
    type:ObjectId,
    ref:'Brand',
    required:true
  }
}

})

//schema model
const Product=mongoose.model('product',productSchema)

module.exports=Product;
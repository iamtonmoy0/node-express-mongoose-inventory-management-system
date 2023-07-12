const express = require("express");
const app = express();
const cors = require("cors");
const  mongoose  = require("mongoose");


app.use(express.json());
app.use(cors());

//schema design 
const productSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,"please provide a name for this product"],
    trim:true,
    unique:[true,"name must be unique"],
    minLength:[3,"name must be at least 3 character"],
    maxLength:[20]
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    min:[0,"price can't be negative"],
  },
  unit:{
    type:String,
    required:true,
    enum:{
      values:["kg","litre","pcs"],
      message:"unit value can't be {value}.must be kg/litre/pcs"
    }
  },
  quantity:{
      type:Number,
      required:true,
      min:[0,"quantity can't be 0"],
      validate:{
        validator:(value)=>{
          const isInteger=Number.isInteger(value);
          if(isInteger){
            return true
          }else{
            return false
          }
        }
      },
      message:"quantity must be an integer"
    },
  
  status:{
    type:String,
    required:true,
    enum:{
      values:["in-stock","out-of-stock","discontinued"],
      message:"status can't be value"
      },
  },
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
  categories:[{
    name:{
    type:String,
    required:true,
  },
  _id:mongoose.Schema.Types.ObjectId,
}]
})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;

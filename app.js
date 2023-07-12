const express = require("express");
const app = express();
const cors = require("cors");
const  mongoose  = require("mongoose");
const productSchema = require("./model/product.model");
require("colors");
require("dotenv").config();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(cors());

// database connection
const db=mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true ,useNewUrlParser: true}).then(()=>{
  console.log('Connected To Database'.green.bold)
})

mongoose.set('useCreateIndex', true);
//schema model 
const Product=mongoose.model('product',productSchema)

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
app.post('/api/v1/product',(req,res,next)=>{
  console.log(req.body)
  const product= new Product(req.body);
  product.save();
  res.send('working')
})

app.listen(port, () => {
  console.log(`App is running on port ${port}...`.yellow.bold);
});
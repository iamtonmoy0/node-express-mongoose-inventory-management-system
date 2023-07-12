const express = require("express");
const app = express();
const cors = require("cors");
const  mongoose  = require("mongoose");
const productRouter = require("./routes/product.router");
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


app.get("/", (req, res) => {
  res.send("server is working! YaY!");
});
// product router
app.use('/api/v1/product',productRouter);
//if route not exist on server
app.all('*',(req,res)=>{
	res.send('no route found')
})
app.listen(port, () => {
  console.log(`App is running on port ${port}...`.yellow.bold);
});
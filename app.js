const express = require("express");
const app = express();
const cors = require("cors");
const mongoose  = require("mongoose");
require("colors");
require("dotenv").config();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(cors());
app.set('view engine', 'pug');//view engine pug
// database connection
const db=mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true ,useNewUrlParser: true}).then(()=>{
  console.log('Connected To Database'.green.bold)
})

mongoose.set('useCreateIndex', true);

// Route
const productRouter = require("./routes/v1/product.router");
const brandRouter = require("./routes/v1/brand.router");


app.get("/", (req, res) => {
  res.render('index');
});

app.use('/api/v1/product',productRouter);
app.use('/api/v1/brand',brandRouter);
  //if route not exist on server
  app.all('*',(req,res)=>{
	res.send('no route found')
})
app.listen(port, () => {
  console.log(`App is running on port ${port}...`.yellow.bold);
});
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
const categoryRouter = require("./routes/v1/category.router");
const storeRouter = require("./routes/v1/store.router");
const stockRouter = require("./routes/v1/stock.router");
const supplierRouter = require("./routes/v1/supplier.router");
const userRouter = require("./routes/v1/user.router");


app.get("/", (req, res) => {
  res.render('index');
});

app.use('/api/v1/product',productRouter);
app.use('/api/v1/brand',brandRouter);
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/store',storeRouter);
app.use('/api/v1/stock',stockRouter);
app.use('/api/v1/supplier',supplierRouter);
app.use('/api/v1/user',userRouter)
  //if route not exist on server
  app.all('*',(req,res)=>{
	res.send('no route found')
})
app.listen(port, () => {
  console.log(`App is running on port ${port}...`.yellow.bold);
});
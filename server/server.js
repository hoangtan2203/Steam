const express = require('express');
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const cartRouter = require('./routes/cart.router');
const cors = require('cors');
const bodyParser  = require('body-parser');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
// req.cookies
app.use(cookieParser());
app.use(cors());

// cổng chạy server
const port = 8800;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:true,
}))

// app.use(fileupload());

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);



app.listen(port,()=>{
    console.log('server on !')
})
// SET STORAGE



   
 
  
  

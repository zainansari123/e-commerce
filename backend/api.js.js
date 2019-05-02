const express = require('express');
const session=require('express-session');
//const multer = require('multer');//for file uploading in the server.
const cors=require('cors');//to send or recieve requests from other servers 
const bodyParser= require('body-parser');//to get data from post requests.
const mongoose=require('mongoose');//to work with Mongo DB
//const nodemailer=require('nodemailer');//to send mails
mongoose.Promise=global.Promise;

const doAuthentication=require('./UserModules/admin/authentication');
const doUploadCatImage=require('./UserModules/admin/uploadCatImage');
const saveCateogary=require('./UserModules/admin/saveCateogary');
const fetchAllCateogary=require('./UserModules/admin/fetchAllCat');
const updateCateogary=require('./UserModules/admin/updateCateogary');
const deleteCateogary=require('./UserModules/admin/deleteCateogary');

const uploadProductImage=require('./UserModules/admin/uploadProductImage');
const saveProduct=require('./UserModules/admin/saveProduct');
const fetchAllProducts=require('./UserModules/admin/fetchAllProducts');
const deleteProduct=require('./UserModules/admin/deleteProduct');
const updateProduct=require('./UserModules/admin/updateProduct');

const fetchProduct=require('./UserModules/front/fetchProduct');
const fetchProductByPrice=require('./UserModules/front/fetchProductByPrice');
const sendMail=require('./UserModules/front/sendMail');
const saveUserDetails=require('./UserModules/front/saveUserDetails');
const authenticateUser=require('./UserModules/front/authenticateUser');
const logout=require('./UserModules/front/logout');

const app = express();
mongoose.Promise=global.Promise;
//Built in Middleware
app.use(session({secret: 'ecommerceSite',
  resave: false,
  saveUninitialized: true,
}));
app.use(cors());
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.json());
app.use(function(req,res,next){
  console.log(req.url);
  next();
})

mongoose.connect("mongodb://localhost:27017/myAdminDb");

mongoose.connection.once('open',function(){
  console.log('connection established..');  
}).on('error',function(err){
  console.log('connection error..'+err);
});


app.post("/adminCredentials",function(req,res)
{
  doAuthentication(req,res);
});

app.post('/api/upload',function(req,res)
{
  doUploadCatImage(req,res);
});

app.post('/saveCat',function(req,res){
  saveCateogary(req,res);
}); 

app.get('/fetchCat',function(req,res){
  fetchAllCateogary(req,res);
});

app.post('/updateCat',function(req,res){
  updateCateogary(req,res);
});

app.post('/delCat',function(req,res){
  deleteCateogary(req,res);
});

app.post('/api/upload/products',function(req,res)
{
  uploadProductImage(req,res);
});

app.post('/savePro',function(req,res){
  saveProduct(req,res);
});

app.get('/fetchPro',function(req,res){
  fetchAllProducts(req,res);
});

app.post('/delPro',function(req,res){
  deleteProduct(req,res);
});

app.post('/updatePro',function(req,res){
  updateProduct(req,res);
});

app.get('/fetchPro/:catname',function(req,res){
    fetchProduct(req,res);
});

app.get('/fetchPro/:minPrice/:maxPrice',function(req,res){
  fetchProductByPrice(req,res);
});

app.post('/sendMail',function(req,res){
  sendMail(req,res);
})

app.post('/userSignUp',function(req,res){
  saveUserDetails(req,res);
});

app.post('/login',function(req,res){
  authenticateUser(req,res);
});

app.get('/logout',function(req,res){
  logout(req,res);
});

app.listen(3000,function()
{
console.log("run on 3000");
});

var express = require('express');
var app = express();
var hostname = '127.0.0.1';
var port = 3001;
var mongoose = require('mongoose');
const bodyparser = require('body-parser');
var dotenv = require('dotenv');
const postRoute = require('./routes/posts')

//importing routes
const authRoute = require('./routes/autho');



dotenv.config();

//connecting to database
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true },
() => {
    console.log("CONNECTED TO DB");
});

//middleware
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//importing routes middleware
app.use('/api/user', authRoute);
app.use('api/posts', postRoute);





app.get('/',(req,res)=>{
    res.status(200).send(`Hi Welcome to the Login and Signup API`);
 });
 
 app.listen(port,()=>{
    console.log("Server is listening on port", +port)
 });

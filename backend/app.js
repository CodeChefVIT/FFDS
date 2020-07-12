const express=require('express')
const bodyParser=require('body-parser')
const bcryptjs=require('bcryptjs')
const nodemailer = require("nodemailer");
const cors=require('cors')
var app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

require('dotenv').config()
var db = require('./config/keys')
var mongoose = require('mongoose')
mongoose.connect(db.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var http = require("http").Server(app)
var io= require("socket.io")(http)

io.on("connection", (socket) => {
    console.log("Socket is connected...")
})

var port=process.env.PORT || 3000

const userModel=require('./models/user')

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: db.email,
    pass: db.pass
  }
});
var rand,mailOptions,host,link,verified=false;

app.post('/register',(req,res,next)=>{
    var post_data=req.query
    var plainPass=post_data.password
    var username=post_data.name
    var email=post_data.email
    var gender=post_data.gender
    var phone=post_data.phone
    bcryptjs.hash(plainPass, 10, function (err, hash){
        var newobj={
            name:username,
            email,
            gender,
            phone,
            slot:post_data.slot,
            password:hash
        }
        userModel.findOne({email:email}).then((user)=>{
            if(user)
            {
                res.json('User already exists')
            }
            else{
                new userModel(newobj).save((err,user)=>{
                    if(err)
                    {
                        res.json(err)
                    }
                    if(user)
                    {
                        res.json('Registered Successful')
                    }
                })
            }
        })
        

    })
})

app.post('/send',function(req,res){
    console.log(db.pass)
    console.log(db.email)
    rand=Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    link="http://"+req.get('host')+"/verify?email="+req.query.mailto+"&id="+rand;
    var mailto=req.query.mailto
    verified=false
    mailOptions={
        from : db.email,
        to : mailto,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
    }
    console.log(mailOptions)
    smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
            console.log(error)
        res.json("error")
    }else{
            console.log("Message sent: ");
        res.json("sent")
        }
    });
    });

app.get('/verify',function(req,res){
    console.log(req.protocol+":/"+req.get('host'));
    if((req.protocol+"://"+req.get('host'))==("http://"+host))
    {
    console.log("Domain is matched. Information is from Authentic email");
    console.log(rand)
    if(req.query.id==rand)
    {
        console.log("email is verified");
        userModel.findOne({email:req.query.email}).then((user)=>{
            if(user){
                user.verified=true
                console.log(user)
                user.save()
            }
        })
        console.log('updated')
        res.json("Email is been Successfully verified")
    }
    else
    {
        console.log("email is not verified")
        res.json("Bad Request - email not verified")
    }
    }
    else
    {
    res.json("Request is from unknown source")
    }
    })

app.post('/verifyemail',(req,res)=>{
    userModel.findOne({email:req.query.email}).then((user)=>{
        if(user.verified==true)
        {
            res.json("email is verified")
        }
        else{
            res.json("email not verified")
        }
    }).catch((err)=>{
        res.send('User not registered')
    })
})

app.post('/login',(req,res)=>{
    var post_data=req.query
    var email=post_data.email
    var password=post_data.password

    userModel.findOne({email:email}).then((user)=>{
        if(!user){
            res.json({
                response:'User not found'
            })
        }
        else {
            bcryptjs.compare(password, user.password, function (err, result) {
                if (result == false) {
                    res.json({
                        response:'Invalid Password'
                    })
            
                } else {
                    res.json({
                        response:'Login successful',
                        name:user.name,
                        email
                    })
                }
            })
        }
    })
})



app.post('/updateDetails',(req,res)=>{

    var data=req.query
    var obj={
        email:data.email,
        bio:data.bio,
        branch:data.branch,
        year:data.year,
        expectations:data.expectations
    }

    userModel.findOneAndUpdate({email:data.email},{$set: obj},{new:true}).then((user1)=>{

        res.json('Details Updated')
        
    }).catch( (err)=>{
        res.json('failed to update')
    })
})

app.post('/showDetails',(req,res)=>{


    userModel.findOne({email:req.query.email}).then((user)=>{
        if(user)
        {
            res.json({
                name:user.name,
                email:user.email,
                phone:user.phone,
                gender:user.gender,
                bio:user.bio,
                branch:user.branch,
                year:user.year,
                expectations:user.expectations,
                slot:user.slot

            })  
        }
        else{
            res.json("Details cant be found")
        }
    
               
    })

    
})
app.get('/showfeed',(req,res)=>{
    var gen
    if(req.body.gender=="female")
    gen="male"
    else if(req.body.gender=="male")
    gen="female"

    userModel.find({slot:req.body.slot,gender:gen}).then((user)=>{
        if(user.length==0){
            res.status(404).send({"message":"Nothing to show in the feed!"})
        }
        else {
            res.status(200).send({"message":"success","payload":user})
        }
    }).catch((err)=>{
        res.status(400).send("Bad Request")
    })
})

app.get('/profileView',(req,res)=>{
    userModel.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            res.status(404).send({"message":"Profile doesn't exist"})
        }
        else {
            res.status(200).send({"message":"success","payload":user})
        }
    }).catch((err)=>{
        res.status(400).send("Bad Request")
    })
})

app.post('/add/new/chat',(req,res)=>{
    userModel.findOne({email:req.body.email}).then((user)=>{
        console.log(user)
        if(!user){
            res.status(404).send({"message":"Nothing to show in the feed!"})
        }
        else {
            console.log(user.chat.length)

            var f=0;
        for(var i=0;i<user.chat.length;i++)
        {
            console.log(user.chat[i].with)
            console.log(req.body.with)
            console.log(user.chat[i].with===req.body.with)
            if(user.chat[i].with===req.body.with)
            {
                console.log(user.chat[i].chats)
                user.chat[i].chats.push({name:req.body.name,msg:req.body.msg,time:req.body.time})
                f=1;
                user.save()
                res.status(201).send({"message":"Chat added"})
            }
        }
        if(f==0)
        {
            console.log(user.chat)
            var obj={
                with:req.body.with,
                chats:[
                    {
                        name:req.body.name,
                        msg:req.body.msg,
                        time:req.body.time
                    }
                ]
            }
            console.log(obj)
            user.chat.push(obj)
            console.log(user.chat)
            user.save()
            res.status(201).send({"message":"Chat added"})
        }
        io.emit("chat", {
            with:req.body.with,
            name:req.body.name,
            msg:req.body.msg,
            time:req.body.time
        })
        }
    }).catch((err)=>{
        res.status(400).send("Bad Request")
    })
})

app.get("/get/all/chats", async(req, res) => {
    var user=await userModel.findOne({email:req.body.email})
    if(!user)
    {
        res.status(404).send({"message":"No such user exists"})
    }
    else
    {
        res.status(200).send({"message":"success","payload":user.chat})
    }
})

app.get('/get/specific/chat',async(req,res)=>{
    try
    {
        var user=await userModel.findOne({email:req.body.email})
        if(!user)
        {
            res.status(404).send({"message":"No such user exists"})
        }
        else
        {
            var f=0
            for(var i=0;i<user.chat.length;i++)
            {
                console.log("inn")
                if(user.chat[i].with===req.body.with)
                {
                    f=1
                    res.status(200).send({"message":"success","payload":user.chat[i].chats})
                }
            }
            if(f==0)
            {
                res.status(200).send({"message":"no chat found","payload":[]})
            }
        }
    }
    catch
    {
        res.status(400).send({"message":"Some error occured while getting the message"})
    }
})
var server = http.listen(port, () => {
    console.log("Well done, now I am listening on ",port)
})

const express=require('express')
const bodyParser=require('body-parser')
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

const userModel=require('./models/user')
var http = require("http").Server(app)
var io= require("socket.io")(http)

io.on("connection", (socket) => {
    console.log("Socket is connected...")
})

var userRoutes=require('./router/user')

app.use('/user',userRoutes)

var port=process.env.PORT || 3000


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

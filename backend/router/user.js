const express = require("express");
const mongoose = require("mongoose");
// const multer = require("multer");
// const slugify=require("slugify")
const router = express.Router();
var db = require('../config/keys')

const userModel=require('../models/user')
const auth=require('../middleware/auth')
const { upload } = require("../middleware/s3client");

const nodemailer=require('nodemailer')
let transporter = nodemailer.createTransport({
    host:'smtp.zoho.com',
    port: 465,
    auth: {
      user: db.email, // your gmail address
      pass: db.pass// your gmail password
    }
  });

router.post('/create',async(req,res)=>{
    userModel.findOne({email:req.query.email}).then(async(result)=>{
        if(result)
        {
            res.status(401).json({message:"User already exists"})
        }
        else
        {
            try{
                const user=new userModel({
                    name:req.query.name,
                    email:req.query.email.toLowerCase(),
                    password:req.query.password,
                    phone:req.query.phone,
                    gender:req.query.gender.toLocaleLowerCase()
                })
                await user.save()
                res.status(201).json({
                    message:"Account created successfully",
                    user
                })
            }
            catch(err){
                res.status(400).send(err)
            }
        }
    })
})

router.post('/send/verification/link',async function(req,res){
    try{
        var rand=Math.floor((Math.random() * 100) + 54);
        var user=await userModel.findOne({email:req.query.mailto})
        user.rand=rand
        await user.save()
        var link="https://"+req.get('host')+"/user/verify?email="+req.query.mailto+"&id="+rand;
        var mailto=req.query.mailto
        mailOptions={
            from : db.email,
            to : mailto,
            subject : "Please confirm your Email account",
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
        }
        // console.log(mailOptions)
        transporter.sendMail(mailOptions, function(error, response){
        if(error){
                // console.log(error)
            res.status(401).json("error")
        }else{
                // console.log("Message sent: ");
            res.status(200).json("sent")
            }
        });
    }
    catch(e)
    {
        res.status(400).send()
    }
});

router.get('/verify',async function(req,res){
    // console.log(req.protocol+":/"+req.get('host'));
    var user=await userModel.findOne({email:req.query.email})
    if(req.query.id==user.rand)
    {
        user.verified=true
        await user.save()
        res.status(200).json({message:"Your email has been successfully verified. You can login now!"})
    }
    else
    {
        res.json("Bad Request - email not verified")
    }
    })

router.post('/verifyemail',(req,res)=>{
    userModel.findOne({email:req.query.email}).then((user)=>{
        if(user.verified==true)
        {
            res.status(200).json({message:"email is verified"})
        }
        else{
            res.status(401).json({message:"email not verified"})
        }
    }).catch((err)=>{
        res.status(400).json({message:'User not registered'})
    })
})

router.post('/login',async(req,res)=>{
    try{
        const user=await userModel.findByCredentials(req.query.email,req.query.password)
        if(user.verified==true)
        {
            const token=await user.generateToken()
            if(!user)
            {
                res.status(400).send()
            }
            res.status(200).json({token,user})
        }
        else
        {
            res.status(401).json({
                "message":"Please verify your email first"
            })
        }
        
    }
    catch{
        res.status(400).send({"err":"invalid email or password"})
    }
})

router.post('/updateDetails',auth,(req,res)=>{

    var data=req.query
    var obj={
        bio:data.bio,
        branch:data.branch,
        year:data.year,
        expectations:req.body.expectations,
        slot:req.query.slot
    }

    userModel.findOneAndUpdate({email:data.email},{$set: obj},{new:true}).then((user1)=>{

        res.status(201).json({message:'Details Updated'})
        
    }).catch( (err)=>{
        res.status(400).json({message:'Failed to update'})
    })
})

router.get('/profileView',auth,(req,res)=>{
    userModel.findOne({email:req.query.email}).then((user)=>{
        if(user)
        {
            res.status(200).json({
                message:"Retrieved user",
                user
            })  
        }
        else{
            res.status(404).json({message:"Profile not be found"})
        }        
    }).catch((err)=>{
        res.status(400).json({message:err})
    })
})

router.get('/showfeed', auth,(req,res)=>{
    var gen
    if(req.query.gender=="female")
    gen="male"
    else if(req.query.gender=="male")
    gen="female"
    else
    gen="none"
    if(gen!="none")
    {
        userModel.find({slot:req.query.slot,gender:gen}).then((user)=>{
            if(user.length==0){
                res.status(404).json({message:"Nothing to show in the feed!"})
            }
            else {
                res.status(200).json({message:"success",payload:user})
            }
        }).catch((err)=>{
            res.status(400).json({message:"Bad Request"})
        })
    }
    else{
        userModel.find({slot:req.query.slot}).then((user)=>{
            if(user.length==0){
                res.status(404).json({message:"Nothing to show in the feed!"})
            }
            else {
                res.status(200).json({message:"success",payload:user})
            }
        }).catch((err)=>{
            res.status(400).json({message:"Bad Request"})
        })
    }
    
})

router.post("/addImage/:email",auth,
	upload.array("inputFile", 1),
	async (req, res, next) => {
		await userModel.findOne({ email: req.params.email })
			.exec()
			.then(async (result) => {
				result.userImage = req.files[0].location;
				await result.save();
				res.status(201).json({
					message: "Update the user Image successfully",
					imageURL: req.files[0].location,
				});
			})
			.catch((err) => {
				res.status(500).json({
					message: "Couldnt upload the image properly,Please try again",
				});
			});
	}
);

module.exports=router
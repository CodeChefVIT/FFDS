const router = require('express').Router();
var User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const {registerValidation, loginValidation} = require('../valida');

router.post("/register", async (req,res) => {
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    //checking for same emails
    const emailExist = await User.findOne({ email : req.body.email });
    if(emailExist) return res.status(400).send("Email already exists");

    //HASHING THE PASSWORD.
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(req.body.password, salt)


    //creating a new user
    const user = new User({
        name : req.body.name,
        password : hashedpassword,
        email : req.body.email,
        gender : req.body.gender
    });
    try{
         await user.save()
         res.status(201).send(user)
        
    }
    catch(error){
        res.send(error);
    }
    
});
//login route.
router.post('/login', async (req, res) => {
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    
    //check if email does not exists from the user created
    const user = await User.findOne({ email : req.body.email });
    if(!user) return res.status(400).send("Email does not exists");

    //to check if password is correct.
    const validpassword =  await bcrypt.compare(req.body.password, user.password);
    if(!validpassword) return res.status(400).send("Incorrect password");

    //creating a token for authentication
 const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
 res.header('auth_token', token).send(token);


    
})




module.exports = router;

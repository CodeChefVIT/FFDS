var mongoose = require('mongoose')
var validator = require('validator')
var bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        validate(user) {
            if (!validator.isEmail(user)) {
                throw new Error('invalid email')
            }
        }
    },
    verified:{
        type:Boolean,
        default:false
    },
    rand:{
        type:String
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type:String
    },
    branch:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        default:""
    },
    bio: {
        type: String,
        default:""
    },
    year:
    {
        type:String,
        default:""
    },
    expectations:[],
    slot:
    {
        type:String,
        default:""
    },
    userImage:{
        type:String,
        default:""
    },
    chat:
    [
        {
            with:{
                type:String
            },
            chats:[{
                name:
                {
                    type:String
                },
                msg:
                {
                    type:String
                },
                time:
                {
                    type:String
                }
            }]
        }
    ]
})
userSchema.methods.toJSON=function(){
    const user=this
    const userObject=user.toObject()
    delete user.password
    delete user.tokens
    return userObject
}
userSchema.methods.generateToken=async function(){
    const user=this
    const token=jwt.sign({_id:user._id.toString()},'mysecret',{expiresIn:'1d'})
    //user.tokens=user.tokens.concat({token})
    //await user.save()
    return token
}
userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await userModel.findOne({email})
    if(!user)
    {
        throw new Error('Unable to login')
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch)
    {
        throw new Error('Unable to login')
    }
    return user
}
userSchema.pre('save',async function(next){
    const user=this
    if(user.isModified('password'))
    {
        user.password=await bcrypt.hash(user.password,8)
        next()
    }
})
var userModel = mongoose.model('userModel', userSchema)

module.exports = userModel
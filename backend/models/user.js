var mongoose = require('mongoose')
var validator = require('validator')

var users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
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
    password: {
        type: String,
        required: true
    },
    phone:{
        type:Number
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
    expectations:
    {
        type:String,
        default:""
    },
    slot:
    {
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

var userModel = mongoose.model('userModel', users)

module.exports = userModel
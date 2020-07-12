var mongoose = require('mongoose')
var validator = require('validator')

var chat = new mongoose.Schema({
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
                    type:Date,
                    default:new Date()
                }
            }]
        }
    ]
})

var Chats = mongoose.model('Chats', chat)

module.exports = Chats
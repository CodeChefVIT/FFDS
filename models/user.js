const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        min :4,
        max : 100
    },
    password : {
        type : String,
        required : true,
        min :6,
        max : 1000
    },
    email : {
        type : String,
        required : true,
        min :4,
        max : 100
    }, 
    gender : {
        type : String,
        required : true,
        min :4,
        max : 100
    },
    date : {
        type : Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', userSchema);

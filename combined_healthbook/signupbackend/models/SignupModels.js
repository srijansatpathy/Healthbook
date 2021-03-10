const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    covid:{
        type:String,
        default:"false"
    },
    age:{
        type:Number,
        default: 0
    },
    other:{
        type:String,
        default: "NONE"
    }
})

module.exports = mongoose.model('accounts', signupTemplate)
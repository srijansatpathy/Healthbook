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
    vaccination_covid:{
        type:Boolean,
        required:false
    },
    vaccination_flue:{
        type:Boolean,
        required:false
    },
    vaccination_tuber:{
        type:Boolean,
        required:false
    },
    health_check_physical:{
        type:Boolean,
        required:false
    },
    age:{
        type:Number,
        required:true
    },
    date_of_birth:{
        type:Date,
        required:true
    },
    fullname:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('accounts', signupTemplate)
const { response } = require('express')
const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignupModels')
const bcrypt = require('bcrypt')
const axios = require('axios')

router.post('/signup', async (request, response) => {

    const saltpassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltpassword)
    let valid_registration = true
    let error_msg = ""

    const signupUser = new signupTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
    const {username, email} = request.body
    await signupTemplateCopy.find({username}, (err, user) => {
        if (err) {
            console.log(err.message)
        }
        if (user !== undefined && user.length != 0) {
            valid_registration = false
            error_msg = "username exist"
        }
    })
    await signupTemplateCopy.find({email}, (err, user) => {
        if (err) {
            console.log(err.message)
        }
        if (user !== undefined && user.length != 0) {
            valid_registration = false
            error_msg = "email exist"
        }
    })
    
    if (valid_registration) {
        signupUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
    }
    else {
        response.send(error_msg)
    }
})

router.post('/login', async (request, response) => {

    const {username, password} = request.body
    signupTemplateCopy.find({username},async (err, user) => {
        if (err) {
            console.log(err.message)
        }
        else if (user === undefined || user.length == 0){
            console.log("User not found")
            response.send("User not found")
        }
        else {
            const pass_check = await bcrypt.compare(password, user[0].password)
            if (user && pass_check) {
                response.json(user)
            }
            else {
                console.log("Incorrect password")
                response.send("Incorrect password")
            }
        }
    })
})

module.exports = router
const { response } = require('express')
const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignupModels')
const bcrypt = require('bcrypt')
const axios = require('axios')

router.post('/signup', async (request, response) => {

    const saltpassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltpassword)

    const signupUser = new signupTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
    signupUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(errpr)
    })
})

router.post('/login', async (request, response) => {

    const {username, password} = request.body
    signupTemplateCopy.find({username},async (err, user) => {
        if (err) {
            console.log(err.message)
        }
        else {
            const pass_check = await bcrypt.compare(password, user[0].password)

            if (user && pass_check) {
                response.json(user)
            }
            else {
                console.log("Incorrect password")
                response.send(false)
            }
        }
    })
})

module.exports = router
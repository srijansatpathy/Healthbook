const { response } = require('express')
const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignupModels')
const bcrypt = require('bcrypt')

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

router.get('/login', (request, response) => {
    
})

module.exports = router
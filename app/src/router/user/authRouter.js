const authRouter = require('express').Router()
const {body} = require('express-validator')

const userLogin = require('../../controllers/authenticate/login')
const userRegister = require('../../controllers/authenticate/register')


authRouter.post('/user/register',body(['name','email','password']).notEmpty(),userRegister)
authRouter.post('/user/login',userLogin)

module.exports = authRouter
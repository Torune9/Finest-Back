const authRouter = require('express').Router()
const filterForm = require('../../service/validator/filterForm')
const userRegister = require('../../controllers/authenticateControllers/register')
const userLogin = require('../../controllers/authenticateControllers/login')

authRouter.post('/user/register',filterForm(),userRegister)

authRouter.post('/user/login',userLogin)

module.exports = authRouter
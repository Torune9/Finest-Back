const authRouter = require('express').Router()
const filterForm = require('../../service/validator/filterForm')
const userRegister = require('../../controllers/authenticate/register')

authRouter.post('/user/register',filterForm(),userRegister)

authRouter.post('/user/login',)

module.exports = authRouter
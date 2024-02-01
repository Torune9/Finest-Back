const {user} =require('../../../../models')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

const userRegister = async(req,res)=>{
    const salt = 15
    const {name,email,password} = req.body
    const pwHash = await bcrypt.hash(password,salt)
    const result = validationResult(req)
    const response = {
        message : 'register success',
    }
    const data = {
        name : name,
        password : pwHash,
        email : email
    }
    try {
       
        if (result.isEmpty()) {
            await user.create(data)
            return res.json(response)
        }else{
            return res.status(404).json({
                error : result.array()
            })
        }
    } catch (error) {
        return res.send(error)
    }
}

module.exports = userRegister
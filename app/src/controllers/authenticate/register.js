const {user} = require('../../../../models')
const {matchedData} = require('express-validator')
const bcrypt = require('bcrypt')

const userRegister = async(req,res)=>{
    const salt = 15
    const response = {
        message : 'register success',
    }
    try {
        const resultData = matchedData(req)
        const pwHash = await bcrypt.hash(resultData.password,salt)
        const data = {
            name : resultData.name,
            password : pwHash,
            email : resultData.email
        }
       await user.create(data)
       return res.json(response)
       
    } catch (error) {
        const dbError = error.errors[0]
        if (dbError) {
            res.status(400).json({
                message  : dbError.message,
                result : [
                    {   
                        type : dbError.type,
                        path : dbError.path,
                        info : `${dbError.path} already exists` 
                    },
                ]
            })
        }else{
            res.status(500).json({
                message : error
            })
        }
    }
}

module.exports = userRegister
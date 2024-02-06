const {body,validationResult} = require('express-validator')
const filterForm = ()=>{
    return [
        body(['name','password']).notEmpty().escape().trim(),
        body('email').notEmpty().escape().trim().isEmail(),
        (req,res,next) =>{
            const result = validationResult(req)
            const errors = result.array()[0]
            if (!result.isEmpty()) {
                return res.status(400).json({
                    error : errors.msg
                })
            }
            next()
        }
    ]
}

module.exports = filterForm
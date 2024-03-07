const jwt = require('jsonwebtoken')
const generateJWT = (payload)=>{
    return jwt.sign(payload,'secretKey', { expiresIn: '1h' });
}
module.exports = generateJWT
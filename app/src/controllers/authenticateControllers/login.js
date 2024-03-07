const { user } = require('../../../../models');
const bcrypt = require('bcrypt');
const generateJWT = require('../../service/generateJWT/jwt')

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userInstance = await user.findOne({
            where: {
                email: email
            }
        });

        if (!userInstance) {
            return res.status(404).json({ message: "User not found" });
        }else{
            const token = generateJWT({
                email : userInstance.email,
                userId : userInstance.id
            })
    
            res.status(200).json({
                message : 'Ok',
                data :{
                    token : token,
                    username : userInstance.name
                }
            })
        }

        const isPasswordValid = await bcrypt.compare(password, userInstance.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }


    } catch (error) {
        console.error('Error when trying to log in', error);
        res.status(500).json({ message: "Error when trying to log in" });
    }
}

module.exports = userLogin;

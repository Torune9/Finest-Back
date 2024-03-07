
const {product} = require('../../../../models')

const createProduct = async (req,res)=>{
    const {name,harga,productCode,userId} = req.body
    try {
        const data = {
            name,
            harga,
            productCode,
            userId
        }
        await product.create(data)
        res.end()
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
   
}

module.exports = createProduct
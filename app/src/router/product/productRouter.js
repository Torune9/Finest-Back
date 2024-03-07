const productRouter = require('express').Router()
const addProduct = require('../../controllers/productControllers/addProduct')

productRouter.post('/product/add',addProduct)

module.exports = productRouter
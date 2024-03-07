const router = require('./router')

const routes = [
    router.authRouter,
    router.productRouter
]

module.exports = routes
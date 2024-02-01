const routes = require('./app/src/router/routes')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(routes)

app.listen(port,()=>console.log(`server running on port ${port}`))
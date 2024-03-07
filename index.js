require('dotenv').config({ path: '.env.development' });

const routes = require('./app/src/router/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

const {app,server} = require('./app/src/service/server/server')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true,
}))
app.use(routes)

server.listen(port,()=>console.log(`server running on port ${port}`))
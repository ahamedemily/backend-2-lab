const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log(`server runnin on ${SERVER_PORT} `))
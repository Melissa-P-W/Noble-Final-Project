const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())


const router = require('./app/routes/router')
server.use('/api', router)

const PORT = process.env.PORT || 3021


server.listen(PORT, () => {
    console.log(`PORT Working: ${PORT}`)
})
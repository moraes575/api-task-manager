const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user-router')

const app = express()

app.use(express.json())
app.use('/users', userRouter)

module.exports = app
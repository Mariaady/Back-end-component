const express = require('express')
const cors = require("cors")

const healthyRouter = require('./src/routers/healthyRouter')
const userRouter = require('./src/routers/userRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/healthy', healthyRouter)
app.use('/', userRouter)

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
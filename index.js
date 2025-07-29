require('dotenv').config(); 


const express = require('express')
const cors = require("cors")
const connectToDatabase = require('./db/connectDb');


const healthyRouter = require('./src/routers/healthyRouter')
const userRouter = require('./src/routers/userRouter')
const placesRouter = require('./src/routers/placesRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/healthy', healthyRouter)
app.use('/user', userRouter)
app.use('/places', placesRouter)

connectToDatabase()

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
//! BOILERPLATE
//* Import statements at the top, Global Variables
const express = require ('express')
const cors = require('cors')
require('dotenv').config
const PORT = process.env.PORT || 8080
const app = express()

//* Middleware (Defines HOW the server runs)
app.use(express.json())
app.use(cors())

//* Endpoints


//* Listen
app.listen(PORT, () => {
    console.log(`_____Up on port number ${PORT}______`)
})
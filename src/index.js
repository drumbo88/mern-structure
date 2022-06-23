const express = require('express')
const path = require('path')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

// Settings
dotenv.config() // Copies .env to process.env
const PORT = process.env.API_PORT || 5000
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

// Middlewares
app.use(express.json())
app.use(cors()) // <- antes de las rutas 

// Routes
app.use('/api/algo', require('./routes/algo.routes'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
const dbInit = require('./database')

app.listen(PORT, () => {
    dbInit()
        .then(db => {
            console.log(db)
            console.log(`Server online on port ${PORT}`)    
        })
        .catch(err => console.error(err))
})

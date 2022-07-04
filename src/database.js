const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const { DB_URI, DB_URI_TEST, NODE_ENV } = process.env
const connString = NODE_ENV == 'test' ? DB_URI_TEST : DB_URI

const dbInit = async () => {
    // Las opciones useNewUrlParser, useUnifiedTopology y useFindAndModify nos ahorrarán advertencias en consola (ni idea pa qué son).
    console.log('Conectando a la BD...')

    return new Promise((resolve, reject) => {
        connectOptions = { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS : DB_CONNECTION_TIMEOUT }
        mongoose.connect(process.env.DB_URI, connectOptions)
        .then(
            db => { console.log("DB is connected"); resolve(db) },
            error => reject(`Error: ${error.message}`)
        )
    })
    
}

module.exports = { connString, dbInit }
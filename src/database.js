const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

module.exports = async () => {
    // Las opciones useNewUrlParser, useUnifiedTopology y useFindAndModify nos ahorrarán advertencias en consola (ni idea pa qué son).
    console.log('Conectando a la BD...')

    return new Promise((resolve, reject) => {
        connectOptions = { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS : 1000 }
        mongoose.connect(process.env.CONNECTION_URL, connectOptions)
        .then(
            db => { console.log("DB is connected"); resolve(db) },
            error => reject(`Error: ${error.message}`)
        )
    })
    
}
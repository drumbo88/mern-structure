const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

/*router.get('/', (req, res) => {
    res.json({ message: 'API Working' })
})*/
router.post('/login', (req, res) => {
    const envMode = req.app.get('env').trim()
    switch (envMode) {
        case 'development':
            const token = jwt.sign(
                { envMode },
                process.env.JWT_KEY,
                { expiresIn: process.env.SESSION_TIME }
            )
            return res.json({
                message: "Auth successful",
                token
            })
        default:
            throw new Error(`Invalid enviroment mode ${envMode}`)
    }
})

module.exports = router
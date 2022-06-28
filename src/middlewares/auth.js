const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1]
        if (!token)
            throw new Error("Header not provided")
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decoded
        next()
    }
    catch(error) {
        return res.status(401).json({
            message: 'Auth failed: '+error.message
        })
    }
}
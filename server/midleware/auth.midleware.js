const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const middleWareAuth = {
    // check token
    middlewareChekcToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log('token', token)
        if (token == null) return res.status(401).send('No token provided!')
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log('err', err)
                res.status(403).send("Unauthorized!")
            }
            req.user = user;
            // res.status(200).json(
            //     {
            //         message: "success!",
            //         data: user
            //     }
            // )
            next()
        })
    }
}

module.exports = { middleWareAuth };
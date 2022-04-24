const jwt = require("jsonwebtoken")

const userAuth = function (req, res, next) {

    let token = req.headers["x-auth-token"];
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" })
    let decodedToken = jwt.verify(token, "functionup-uranium");

    if (!decodedToken) {
        return res.status(401).send({ status: false, msg: "token is invalid" });
    } else {

        if (decodedToken.userId == req.params.userId) {
            next()
        } else {
            res.status(403).send({ msg: "Unauthorized User" })
        }
    }


}

module.exports.userAuth = userAuth
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/user", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.get("/user/:userId",middleware.userAuth, userController.getUserData)

router.put("/userUpdate/:userId",middleware.userAuth, userController.updateUser)

router.put("/userDelete/:userId",middleware.userAuth, userController.deleteUser)


module.exports = router;
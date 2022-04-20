const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const middleware = require("../middlewares/commonMiddlewares")
const OrderController=require("../controllers/orderController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createProduct",ProductController.createProduct  )

router.post("/createUser",middleware.midvalid,UserController.createUser  )

router.post("/createOrder",middleware.midvalid,OrderController.createOrder )



module.exports = router;
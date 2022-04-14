const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook )

router.post("/createAuthor", BookController.createAuthor )
//list of books by chetan bhagat
router.get("/getChetanBhagat", BookController.getChetanBhagat )
// find and update 
router.get("/getAndUpdate", BookController.getAndUpdate )
//books between 50 and 100 inclusive and respond with author of the books
router.get("/getBooksBetween", BookController.getBooksBetween )

module.exports = router;
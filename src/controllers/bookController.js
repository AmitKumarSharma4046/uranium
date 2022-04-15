const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(book.author && book.publisher){
        let validAuthor= await authorModel.findOne({_id:book.author})
        let validPublisher= await publisherModel.findOne({_id:book.publisher})
        if(validAuthor){
            if (validPublisher){
                let bookCreated = await bookModel.create(book)
                res.send({msg: bookCreated})
            }else{
                res.send({msg: "ERROR: publisher is not present"})    
            }
        }else{
            res.send({msg: "ERROR: author is not present"})
        }
    }else{
        res.send({msg: "ERROR: author _id and publisher _id is required"})
    }
    
}

const getAllBooks= async function (req, res) {
    let allBooks = await bookModel.find().populate("author").populate("publisher")
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.getAllBooks= getAllBooks

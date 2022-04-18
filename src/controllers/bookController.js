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

const putUpdateCover= async function (req, res) {
    let array = await publisherModel.find({$or:[{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
    let arr1=[]
    for(let i=0;i<array.length;i++){
        let val=array[i]._id
        arr1.push(val)
    }
    let updateHardCover= await bookModel.updateMany({publisher:{$in:arr1}},{$set:{isHardCover:true}},{new:true})
    res.send({msg: updateHardCover})
}

const putUpdatePrice= async function (req, res) {
    let arr = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let arr1=[]
    for(let i=0;i<arr.length;i++){
        let val=arr[i]._id
        arr1.push(val)
    }
    let upPrice = await bookModel.updateMany({author:{$in:arr1}},{$inc:{"price":10}},{new:true})
    res.send({msg: upPrice})
}

module.exports.createBook= createBook
module.exports.getAllBooks= getAllBooks
module.exports.putUpdateCover= putUpdateCover
module.exports.putUpdatePrice= putUpdatePrice

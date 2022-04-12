const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let yr=req.body
    let allBooks= await BookModel.find(yr)
    res.send({msg: allBooks})
}

const getParticularBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{bookName:req.body.bookName},{authorName:req.body.authorName},{tags:req.body.tags},
        {year:req.body.year},{price:req.body.price},{totalPages:req.body.totalPages},{stockAvailable:req.body.stockAvailable}]})
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({"price.indian":{$in:[100,200,500]}})
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]})
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData 
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks

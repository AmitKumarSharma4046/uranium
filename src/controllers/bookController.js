const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authormodel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getChetanBhagat= async function (req, res) {
    let id= await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    let x=id.author_id
    let savedData= await BookModel.find({author_id: x})
    res.send({msg: savedData})
}

const getAndUpdate= async function (req, res) {
    let updatedData= await BookModel.findOneAndUpdate({name:"Two States"},{$set:{price:100}},{new:true})
    let id=updatedData.author_id
    let authorData=await AuthorModel.find({author_id:id}).select({author_name:1,_id:0})
    res.send({msg: updatedData,name:authorData})
}

const getBooksBetween= async function (req, res) {
    let arr=[]
    let arr1=[]
    let updatedData= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
    updatedData.forEach((ele)=>{
        arr.push(ele.author_id)
    })
    let temp=arr.length
    temp-=1
    while(temp){
        
        arr1.push( await AuthorModel.findOne({author_id:arr[temp]}).select({author_name:1,_id:0}))
        temp--
        
    }
    res.send({msg:arr1})
}


module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.getChetanBhagat=getChetanBhagat
module.exports.getAndUpdate=getAndUpdate
module.exports.getBooksBetween=getBooksBetween



// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id:0})
//     res.send({msg: allBooks})
// }

// const getBooksInYear= async function (req, res) {
//     let yr=req.body
//     let allBooks= await BookModel.find(yr)
//     res.send({msg: allBooks})
// }

// const getParticularBooks= async function (req, res) {
//     let condition=req.body
//     let allBooks= await BookModel.find({$or:[{bookName:condition.bookName},{authorName:condition.authorName},{tags:condition.tags},
//         {year:condition.year},{price:condition.price},{totalPages:condition.totalPages},{stockAvailable:condition.stockAvailable}]})
//     res.send({msg: allBooks})
// }

// const getXINRBooks= async function (req, res) {
//     let allBooks= await BookModel.find({"price.indian":{$in:[100,200,500]}})
//     res.send({msg: allBooks})
// }

// const getRandomBooks= async function (req, res) {
//     let allBooks= await BookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]})
//     res.send({msg: allBooks})
// }


// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData 
// module.exports.getBooksInYear= getBooksInYear
// module.exports.getParticularBooks=getParticularBooks
// module.exports.getXINRBooks=getXINRBooks
// module.exports.getRandomBooks=getRandomBooks

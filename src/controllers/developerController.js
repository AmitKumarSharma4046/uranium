const DeveloperModel= require("../models/developerModel")
const BatchModel= require("../models/batchModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await DeveloperModel.create(developer)
    res.send({data: developerCreated})
}

const getScholarshipDevelopers= async function (req, res) {
    let sdev = await DeveloperModel.find({gender:"female",percentage:{$gte:70}})
    res.send({data: sdev})
}

const getDevelopers= async function(req,res){
    let pro=req.query.program
    let per=req.query.percentage
    let back=await BatchModel.find({program:pro}).select({_id:1})
    let dev = await DeveloperModel.find({batch:back,percentage:{$gte:per}})
    res.send({data:dev})
} 

module.exports.createDeveloper= createDeveloper
module.exports.getScholarshipDevelopers= getScholarshipDevelopers
module.exports.getDevelopers= getDevelopers

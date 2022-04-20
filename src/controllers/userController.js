const req = require("express/lib/request")
const UserModel= require("../models/userModel")



const createUser = async function(req,res){
    let user = req.body
    let updatedUser= await UserModel.create(user)
    res.send({msg:updatedUser})
}


module.exports.createUser= createUser

const UserModel = require("../models/userModel")


const midvalid= function ( req, res, next) {
    
    if (req.headers.isfreeappuser){
        if(req.headers.isfreeappuser=="true"){
            req.body.isFreeAppUser=true
        }else{
            req.body.isFreeAppUser=false
        }
        next()
    }else{
        res.send({msg:"isFreeAppUser header is not present."})
    }
    
}

module.exports.midvalid= midvalid

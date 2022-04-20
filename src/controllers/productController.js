const ProductModel= require("../models/productModel")



const createProduct = async function(req,res){
    let pr = req.body
    let product= await ProductModel.create(pr)
    res.send({msg: product })
}

module.exports.createProduct=createProduct
const OrderModel=require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel = require("../models/userModel")
const moment = require("moment")

const createOrder = async function(req,res){
    let userid= await UserModel.findOne({_id:req.body.userId})
    let productid=await ProductModel.findOne({_id:req.body.productId})
    let p = await ProductModel.findOne({_id:req.body.productId}).select({_id:0,price:1})
    let bl = await UserModel.findOne({_id:req.body.userId}).select({_id:0,balance:1})
    if(userid){
        if(productid){
            if(req.headers.isfreeappuser=="true"){
                req.body.amount=0
                req.body.isFreeAppUser=true
                req.body.date= new Date()
                let data= await OrderModel.create(req.body)
                res.send({msg:data})
            }else if(p.price>bl.balance){
                res.send({msg:"Insufficient Balance."})
            }else{
                let userupdated= await UserModel.findByIdAndUpdate({_id:req.body.userId},{$inc:{"balance":-p.price}},{new :true})
                req.body.amount=p.price
                req.body.isFreeAppUser=false
                req.body.data=new Date()
                let data= await OrderModel.create(req.body)
                res.send({msg:data,new:userupdated})

            }
        }else{
            res.send({msg:"productid is not valid or not present."})
        }
    }else{
        res.send({msg: "userid is not valid or not present."})
    }
}

module.exports.createOrder=createOrder
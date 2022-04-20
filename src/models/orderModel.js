const mongoose = require("mongoose")
const objectID = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema({
    
    userId:{type:objectID, ref:"User"},
	productId: {type:objectID,ref:"Product"},
	amount: Number,
	isFreeAppUser: Boolean, 
	date: Date

},{timestamps:true});

module.exports = mongoose.model('Order', orderSchema) //orders

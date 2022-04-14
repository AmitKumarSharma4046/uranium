const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');




const bookSchema = new mongoose.Schema( {
    author_id:{type:Number,required:true},
    name:{type:String,required:true},
    price:{type:Number},
    ratings:{type:Number}
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users & books

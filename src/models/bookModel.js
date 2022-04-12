const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,required:true},
    authorName: {type:String,required:true},
    tags:[String],
    year: {type:Number,required:true,default:2021},
    price:{
        indian : String,
        european : String
    },
    totalPages : Number,
    stockAvailable : Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users & books



// String, Number
// Boolean, Object/json, array
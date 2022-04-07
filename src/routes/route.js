const express = require('express');
const lodash = require('lodash')

const router = express.Router();
const loggerModule = require('../logger/logger.js');
const helperModule = require('../util/helper.js')
const formatterModule = require('../validator/formatter.js')


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    loggerModule.welcomeMsg()
    helperModule.getDate()
    helperModule.getMonth()
    helperModule.getBatchInformation()
    formatterModule.getTrim()
    formatterModule.getLowerCase()
    formatterModule.getUpperCase()
});


router.get('/hello', function (req, res) {
    res.send('My  hello api!')

    let year=['january','feburary','march','april','may','june','july','august','september','october','november','december']
    let chunksOfArray=lodash.chunk(year,3)
    console.log(chunksOfArray)

    let numberArray=[1,3,5,7,9,11,13,15,17,19]
    let tailOfArray=lodash.tail(numberArray)
    console.log(tailOfArray)

    let array1=[1,2,3,4,5]
    let array2=[7,2,6,4,5]
    let array3=[1,2,3,4,8]
    let array4=[1,9,3,8,0]
    let array5=[11,19,13,14,15]
    let unionOfArray=lodash.union(array1,array2,array3,array4,array5)
    console.log(unionOfArray)

    let obj=['horror','The Shining','drama','Titanic','thriller','Shutter Island','fantasy','Pans Labyrinth']
    let objectKeyPair=lodash.fromPairs(obj)
    console.log(objectKeyPair)
    
});


module.exports = router;
// adding this comment for no reason
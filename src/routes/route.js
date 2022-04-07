const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
//Problem 1
router.get('/movies', function(req, res) {
    let movieArray=['sher', 'tiger', 'tiger zinda hai','matrix','matrix resurrection']
    res.send(movieArray)
})
//Problem 2 & 3
router.get('/movies/:indexNumber', function(req, res) {
    let movieArray=['sher', 'tiger', 'tiger zinda hai','matrix','matrix resurrection']
    let result=''
    let index=req.params.indexNumber
    if(index>movieArray.length){
        res.send("index greater tha valid index")    
    }else{
    for(let i=0;i<movieArray.length;i++){
        if(i==index){
            result=movieArray[i]
        }
    }
    res.send(result)
    }
})
//Problem 4
router.get('/films', function(req, res) {
    let movieObj=[{'id':1,'name':'The Shining'},{'id':2,'name':'Incendies'},{'id':3,'name':'Ranf De Basanti'},{'id':4,'name':'Finding Nemo'}]
    res.send(movieObj)
})
//Problem 5
router.get('/films/:filmId', function(req, res) {
    let movieObj=[{'id':1,'name':'The Shining'},{'id':2,'name':'Incendies'},{'id':3,'name':'Ranf De Basanti'},{'id':4,'name':'Finding Nemo'}]
    let idGiven=req.params.filmId
    if(idGiven>0 && idGiven<movieObj.length){
        res.send(movieObj[idGiven])
    }else{
        res.send('No movie exist with this id')
    }   
})

module.exports = router;
// adding this comment for no reason
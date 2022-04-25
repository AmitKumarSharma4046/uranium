const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getByDistrict", CowinController.getByDistrict)

//Get API for weather of london
router.get("/weather", CowinController.getWeather)

//Get api for weather for cities=[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]in order of their increasing temperature
router.get("/weatherOfCities", CowinController.getWeatherOfCities)

//making custom memes
router.post("/memes", CowinController.creatememes)


module.exports = router;
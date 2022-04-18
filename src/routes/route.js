const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerController= require("../controllers/developerController")


router.post("/createBatch", batchController.createBatch  )

router.post("/createDeveloper", developerController.createDeveloper  )

router.get("/getScholarshipDevelopers", developerController.getScholarshipDevelopers)

router.get("/getDevelopers", developerController.getDevelopers)

module.exports = router;
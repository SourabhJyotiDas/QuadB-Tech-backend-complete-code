const express = require("express");
const { getSavedApiData, initializeDatabase } = require("../controllers/crypto");

const router = express.Router();


router.route("/addalldata").get(initializeDatabase);
router.route("/getalldata").get(getSavedApiData);


module.exports = router;

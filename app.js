const express = require("express");
const app = express();
const cors = require('cors');



require("dotenv").config({path:"config/config.env"})

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())


// importing Routes
const crypto = require("./routes/crypto")

// usign Routes
app.use("/api/v1",crypto)


module.exports = app;
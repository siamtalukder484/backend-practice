const express = require("express");
const router = express.Router();
const authRoutes = require("./authentication.js")

router.use("authentication",authRoutes)

module.exports = router 
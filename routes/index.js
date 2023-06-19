const express = require("express");
const router = express.Router();
const apiroutes = require("./api")

const api = process.env.BASE_URL

router.use(api,apiroutes)

module.exports = router 
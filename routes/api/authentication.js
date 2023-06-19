const express = require("express");
const router = express.Router();

router.get("/registration", function(req,res){
    res.send("Siam")
})

module.exports = router 
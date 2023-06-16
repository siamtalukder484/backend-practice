const express = require("express");
const check = require("./middleware/checker");
const app = express()

const User = require("./model/user.js");
const Result = require("./model/result.js")
const nodemailer = require("nodemailer");
const emailV = require("./emailVerification");
var jwt = require('jsonwebtoken');
const dbConnection = require("./configuration/db");


app.use(express.json())



dbConnection()

//result post operation
app.post("/result", function(req, res){
    let {name, subject, grade} = req.body
    let result = new Result({
        name,
        subject,
        grade,
    });
    result.save()
    res.send("Result saved successfully..")
});
//result get operation
app.get("/getresult", async function(req,res){
    let getresult = await Result.find({})
    res.send(getresult)
})

//otp send operation
  app.post("/reg", async function(req,res){
    function generateRandomNumber() {
      const min = 10000000;
      const max = 99999999; 
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNumber;
    }
    const random8DigitNumber = generateRandomNumber();
        let {name,email,password} = req.body
        let user =  new User({
            name: name,
            email: email,
            password: password,
            code: random8DigitNumber,
        })
        user.save()
        var token = await jwt.sign({ id: user.email }, "kfjie6541ewrf54fhjhjhgg");
        console.log(token);
        res.send("Registration Successful")
        emailV(user.email,user.code)
  })
  app.get("/login", async function(req,res){
        let {email,password} = req.body
        let user = await User.find({email:email,password:password}).select({password:0})
        console.log(user);
  })

app.get("/",function(req,res){
    let users = [
        {
            name: "siam"
        },
        {
            name: "shawon"
        },
        {
            name: "shohan"
        },
        {
            name: "mehedi"
        }
    ]
    res.json(users)
});


// app.post("/reg",(req,res)=>{
//     let {name,email} = req.body
//     if(name == ""){
//         return res.json({error: "Name ditea hobea"})
//     }else if(email == ""){
//         return res.json({error: "Email ditea hobea"})
//     }
//     else{
//         res.json({name,email})
//     }
// })


app.listen(8000,function(){
    console.log("Port Running");
})
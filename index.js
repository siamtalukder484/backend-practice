const express = require("express");
const check = require("./middleware/checker");
const app = express()
const mongoose = require('mongoose');
const User = require("./model/user.js");
const nodemailer = require("nodemailer");
const emailV = require("./emailVerification");


app.use(express.json())



mongoose.connect('mongodb+srv://backendsiam:siam1256@shop-pay.4qy3mwr.mongodb.net/backend')
  .then(() => console.log('Connected!'));


  app.post("/reg",  function(req,res){
        let {name,email,password} = req.body
        let user =  new User({
            name: name,
            email: email,
            password: password,
        })
        user.save()
        res.send("Registration Successful")
        emailV(user.email)
  })
  app.get("/login", async function(req,res){
        let {email,password} = req.body
        let user = await User.find({email:email,password:password}).select({password:0})
        console.log(user);
  })

// app.get("/" ,check,function(req,res){
//     let users = [
//         {
//             name: "siam"
//         },
//         {
//             name: "shawon"
//         },
//         {
//             name: "shohan"
//         },
//         {
//             name: "mehedi"
//         }
//     ]
//     res.json(users)
// });


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
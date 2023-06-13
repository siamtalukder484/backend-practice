const express = require("express");
const check = require("./middleware/checker");
const app = express()
app.use(express.json())
console.log("nodemon");

app.get("/" ,check,function(req,res){
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


app.post("/reg",(req,res)=>{
    let {name,email} = req.body
    if(name == ""){
        return res.json({error: "Name ditea hobea"})
    }else if(email == ""){
        return res.json({error: "Email ditea hobea"})
    }
    else{
        res.json({name,email})
    }
})


app.listen(8000,function(){
    console.log("Port Running");
})
function check(req,res,next){
    console.log(req.headers.authorization)
    if(req.headers.authorization == 12345){
        next()
    }else{
        res.json("Auth Failed")
    }
}
module.exports = check
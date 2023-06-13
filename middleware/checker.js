function check(req,res,next){
    console.log(req.headers.authorization)
    if(req.headers.authorization == 12345){
        next()
    }else{
        res.json("Auth Failed hoice")
    }
}
module.exports = check
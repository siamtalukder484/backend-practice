const mongoose = require('mongoose');
const {Schema} = mongoose


let resultSchema = new Schema({
    name:{
        type: String,
    },
    subject:{
        type: String,
    },
    grade:{
        type: String,
    }
})

module.exports = mongoose.model("Result", resultSchema)
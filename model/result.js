const mongoose = require('mongoose');
const {Schema} = mongoose


let resultSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    subject:{
        type: String,
    },
    grade:{
        type: String,
    },
    verified: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Result", resultSchema)
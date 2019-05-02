var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var proSchema = new Schema({
    pname: {
        type: String,
        unique: true,
        sparse:true
    },
    price:{
         type: Number
    },
    os:{
        type:String
    },
    warranty:{
        type:String
    },
    processor:{
        type:String
    },
    pimagePath: {
        type: String,
        unique: true,
        sparse:true
    },
    dat: {
        type: Date,
        default: Date.now
    }
})

module.exports = proSchema;
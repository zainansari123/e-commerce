var mongoose = require('mongoose');
const productSchema=require('../../database/product');
var Schema = mongoose.Schema;
var catSchema = new Schema({
    cname: {
        type: String,
        sparse:true
    },
    cimagePath: {
        type: String
    },
    products:[productSchema],
    dat: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('category',catSchema);